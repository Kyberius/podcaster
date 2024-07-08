import { LocalStorage } from './LocalStorage'

describe('LocalStorage', () => {
  let storage: LocalStorage
  beforeEach(() => {
    storage = new LocalStorage()
    localStorage.clear()
  })

  it('should save value', () => {
    storage.setItem('mock', 'value')

    expect(localStorage._store).toEqual({ mock: 'value' })
  })

  it('should get saved value', () => {
    localStorage._store['mock'] = 'value'
    expect(storage.getItem('mock')).toEqual('value')
  })

  it('should remove a value', () => {
    localStorage._store['mock'] = 'value'
    storage.removeItem('mock')
    expect(localStorage._store['mock']).not.toBeTruthy()
  })

  it('should clear all values', () => {
    localStorage._store['mock'] = 'value'
    localStorage._store['mock2'] = 'value2'

    storage.clear()
    expect(localStorage._store).toEqual({})
  })
})
