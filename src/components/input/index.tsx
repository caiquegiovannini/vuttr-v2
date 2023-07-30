import { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    placeholder?: string
    prefix?: string
}

export function Input({ id, label, placeholder, prefix, ...rest }: InputProps) {
    return (
        <fieldset className='input'>
            {label && (<label htmlFor={id} className='input__label'>{label}</label>)}
            <div className="input__field-container">
                {prefix && (
                    <span className="input__prefix">{prefix}</span>
                )}
                <input type="text" id={id} placeholder={placeholder} data-prefix={prefix} {...rest} />
            </div>
        </fieldset>
    )
}