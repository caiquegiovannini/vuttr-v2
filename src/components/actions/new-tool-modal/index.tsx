import { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Add from '../../../assets/add.svg'
import { addTool } from '../../../api/tools'
import { ToolPayload } from '../../../api/types'
import { useAddNewTool } from '../../../hooks/use-add-new-tool'

import { Input } from '../../input'
import { Textarea } from '../../textarea'

import './styles.css'

interface NewToolModalProps {
    toggleOpenModal: () => void
}

export function NewToolModal({ toggleOpenModal }: NewToolModalProps) {
    const { sanitizeValue, formatToolUrl, formatTags } = useAddNewTool()

    const [toolTitle,setToolTitle] = useState('')
    const [toolUrl,setToolUrl] = useState('')
    const [toolDescription, setToolDescription] = useState('')
    const [toolTags, setToolTags] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const payload: ToolPayload = {
            title: sanitizeValue(toolTitle),
            url: formatToolUrl(toolUrl),
            description: sanitizeValue(toolDescription),
            tags: formatTags(toolTags),
        }

        try {
            setIsLoading(true)
            await addTool(payload)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }

        toggleOpenModal()
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='modal__overlay' />
            <Dialog.Content className='modal'>
                <Dialog.Title className='modal__title'>
                    Add new tool
                </Dialog.Title>
                <form className='modal__form' onSubmit={handleSubmit}>
                    <Input
                        id='tool-title'
                        label='Tool title'
                        value={toolTitle}
                        onChange={(e) => setToolTitle(e.target.value)}
                    />
                    <Input
                        id='tool-url'
                        label='Tool url' prefix='https://'
                        value={toolUrl}
                        onChange={(e) => setToolUrl(e.target.value)}
                    />
                    <Textarea
                        id='tool-description'
                        label='Tool description'
                        value={toolDescription}
                        onChange={(e) => setToolDescription(e.target.value)}
                    />
                    <Input
                        id='tool-tags'
                        label='Tags' placeholder='separate tags by space'
                        value={toolTags}
                        onChange={(e) => setToolTags(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='modal__add-tool-button'
                        disabled={isLoading}
                    >
                        Add tool
                    </button>
                </form>
                <Dialog.Close asChild>
                    <button
                        className='modal__close-button'
                        aria-label='Close button'
                    >
                        <img src={Add} alt='' />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    )
}