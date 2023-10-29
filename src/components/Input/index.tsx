import { InputHTMLAttributes, forwardRef, useId } from 'react'
import { inputStyle, inputWrapper } from './styles.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    const id = useId()

    return (
      <div className={inputWrapper}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          {...rest}
          id={id}
          ref={ref}
          className={inputStyle}
          style={
            {
              // background: '#010b33'
            }
          }
        />
      </div>
    )
  }
)

Input.displayName = 'Input'
