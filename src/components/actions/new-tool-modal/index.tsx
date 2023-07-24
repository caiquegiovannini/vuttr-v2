import { FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Add from '../../../assets/add.svg'
import { Input } from '../../input'
import { Textarea } from '../../textarea'

import { addTool } from '../../../api/tools'
import { useAddNewTool } from '../../../hooks/use-add-new-tool'

import './styles.css'
import { ToolPayload } from '../../../api/types'

export function NewToolModal() {
    const { sanitizeValue, formatToolUrl, formatTags } = useAddNewTool() // criar estados para os inputs para poder possuir um valor inicial base

    const [toolTitle,setToolTitle] = useState('')
    const [toolUrl,setToolUrl] = useState('')
    const [toolDescription, setToolDescription] = useState('')
    const [toolTags, setToolTags] = useState('')

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const payload: ToolPayload = {
            title: sanitizeValue(toolTitle),
            url: formatToolUrl(toolUrl),
            description: sanitizeValue(toolDescription),
            tags: formatTags(toolTags),
        }

        try {
            await addTool(payload)
        } catch (error) {
            console.error(error)
        }
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