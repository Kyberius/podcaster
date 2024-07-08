import { render, screen, waitFor } from '@testing-library/react'
import Input from './Input'
import userEvent from '@testing-library/user-event'

jest.useFakeTimers()

describe('Input', () => {
  it('should render Input component', () => {
    render(<Input value='' onChange={() => null} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render input with placeholder', () => {
    render(<Input value='' onChange={() => null} placeholder='placeholder' />)

    expect(screen.getByRole('textbox')).toHaveProperty(
      'placeholder',
      'placeholder',
    )
  })

  it('should receive value', () => {
    render(<Input value='mock' onChange={() => null} />)

    expect(screen.getByRole('textbox')).toHaveValue('mock')
  })

  it('should update internal value', async () => {
    render(<Input value='' onChange={() => null} />)
    const user = userEvent.setup()

    const input = screen.getByRole('textbox')
    user.type(input, 'mock')
    await waitFor(() => {
      expect(input).toHaveValue('mock')
    })
  })

  it('should debounce value onChange', async () => {
    const onChange = jest.fn()
    render(<Input value='' onChange={onChange} delay={500} />)
    const user = userEvent.setup()

    const input = screen.getByRole('textbox')
    user.type(input, 'mock')

    jest.advanceTimersByTime(500)
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('mock')
    })
  })
  it('should not call onChande immediately', () => {
    const onChange = jest.fn()
    render(<Input value='' onChange={onChange} delay={500} />)

    expect(onChange).not.toHaveBeenCalledWith('')
  })

  it('should not call onChange before time runs out', async () => {
    const onChange = jest.fn()
    render(<Input value='' onChange={onChange} delay={500} />)

    const user = userEvent.setup()

    const input = screen.getByRole('textbox')
    user.type(input, 'mock')

    await waitFor(() => {
      expect(onChange).not.toHaveBeenCalledWith('mock')
    })
  })
})
