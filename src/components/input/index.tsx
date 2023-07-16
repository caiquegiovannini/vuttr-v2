import './styles.css'

interface InputProps {
    id: string
    label: string
    placeholder?: string
    prefix?: string
    inputRef?: React.Ref<HTMLInputElement>
}

export function Input({ id, label, placeholder, prefix, inputRef }: InputProps) {
    return (
        <fieldset className='input'>
            <label htmlFor={id} className='input__label'>{label}</label>
            <div className="input__field-container">
                {prefix && (
                    <span className="input__prefix">{prefix}</span>
                )}
                <input type="text" id={id} placeholder={placeholder} data-prefix={prefix} ref={inputRef} />
            </div>
        </fieldset>
    )
}