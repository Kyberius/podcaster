// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

jest.mock('modules/shared/presentation/hooks/useTranslation', () => ({
  __esModule: true,
  default: () => ({
    $t: (t: string) => t,
  }),
}))

class LocalStorageMock {
  public _store: { [key: string]: string } = {}

  getItem(key: string) {
    return this._store[key] || null
  }
  setItem(key: string, value: string) {
    this._store[key] = value
  }
  removeItem(key: string) {
    delete this._store[key]
  }
  clear() {
    this._store = {}
  }
}

Object.defineProperty(window, 'localStorage', {
  value: new LocalStorageMock(),
})
