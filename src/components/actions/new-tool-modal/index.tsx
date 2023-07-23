import * as Dialog from '@radix-ui/react-dialog';

import Add from '../../../assets/add.svg'
import { Input } from '../../input';
import { Textarea } from '../../textarea';

import './styles.css'
import { useRef } from 'react';

export function NewToolModal() {
    const toolNameRef = useRef<HTMLInputElement>(null)
    const toolLinkRef = useRef<HTMLInputElement>(null)
    const toolDescriptionRef = useRef<HTMLTextAreaElement>(null)
    const tagsRef = useRef<HTMLInputElement>(null)

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='modal__overlay' />
            <Dialog.Content className='modal'>
                <Dialog.Title className='modal__title'>
                    Add new tool
                </Dialog.Title>
                <form className='modal__form' onSubmit={onSubmit}>
                    <Input id='tool-name' label='Tool name' inputRef={toolNameRef} />
                    <Input id='tool-link' label='Tool link' prefix='https://' inputRef={toolLinkRef} />
                    <Textarea id='tool-description' label='Tool description' textareaRef={toolDescriptionRef} />
                    <Input id='tool-tags' label='Tags' placeholder='separate tags by space' inputRef={tagsRef} />
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