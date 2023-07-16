import './styles.css'

interface TextareaProps {
    id: string
    label: string
    children: string
    textareaRef?: React.Ref<HTMLTextAreaElement>
}

export function Textarea({ id, label, children, textareaRef }: TextareaProps) {
    return (
        <fieldset className='textarea'>
            <label htmlFor={id} className='textarea__label'>{label}</label>
            <textarea id={id} ref={textareaRef}>
                {children}
            </textarea>
        </fieldset>
    )
}