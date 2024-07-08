import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import styles from './Input.module.scss'
import useDebounce from 'modules/shared/presentation/hooks/useDebounce'

type InputProps = {
  value: string
  placeholder?: string
  onChange: (value: string) => void
  delay?: number
}
const Input = ({ value, placeholder, onChange, delay }: InputProps) => {
  const [internalValue, setInternalValue] = useState(value)
  const debouncedValue = useDebounce(internalValue, delay)

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value)
  }, [])

  useEffect(() => {
    if (value !== debouncedValue) onChange(debouncedValue)
  }, [onChange, debouncedValue, value])

  return (
    <input
      type='text'
      className={styles.input}
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

export default Input
