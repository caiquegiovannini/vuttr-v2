import { TextareaHTMLAttributes } from 'react'
import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    label: string
}

export function Textarea({ id, label, ...rest }: TextareaProps) {
    return (
        <fieldset className='textarea'>
            <label htmlFor={id} className='textarea__label'>{label}</label>
            <textarea id={id} {...rest} />
        </fieldset>
    )
}