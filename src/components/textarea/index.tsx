import './styles.css'

interface TextareaProps {
    id: string
    label: string
    children: string
}

export function Textarea({ id, label, children }: TextareaProps) {
    return (
        <fieldset className='textarea'>
            <label htmlFor={id} className='textarea__label'>{label}</label>
            <textarea id={id}>
                {children}
            </textarea>
        </fieldset>
    )
}