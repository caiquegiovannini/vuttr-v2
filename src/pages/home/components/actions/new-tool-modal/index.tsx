import { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Add from '../../../../../assets/add.svg'
import { ToolsContext } from '../../../../../contexts/tools-context'
import { useNewToolForm } from '../../../../../hooks/use-new-tool-form'
import { Input } from '../../../../../components/input'
import { Textarea } from '../../../../../components/textarea'
import './styles.css'

interface NewToolModalProps {
    toggleOpenModal: () => void
    isOpen: boolean
}

export function NewToolModal({ toggleOpenModal, isOpen }: NewToolModalProps) {
    const { updateTools } = useContext(ToolsContext)
    const {
        toolTitle,
        toolUrl,
        toolDescription,
        toolTags,
        handleChangeTitle,
        handleChangeUrl,
        handleChangeDescription,
        handleChangeTags,
        isLoading,
        handleSubmit,
    } = useNewToolForm({ updateTools, toggleOpenModal })

    return (
        <Dialog.Root open={isOpen} onOpenChange={toggleOpenModal}>
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
                            onChange={(e) => handleChangeTitle(e.target.value)}
                        />
                        <Input
                            id='tool-url'
                            label='Tool url' prefix='https://'
                            value={toolUrl}
                            onChange={(e) => handleChangeUrl(e.target.value)}
                        />
                        <Textarea
                            id='tool-description'
                            label='Tool description'
                            value={toolDescription}
                            onChange={(e) => handleChangeDescription(e.target.value)}
                        />
                        <Input
                            id='tool-tags'
                            label='Tags' placeholder='separate tags by space'
                            value={toolTags}
                            onChange={(e) => handleChangeTags(e.target.value)}
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
        </Dialog.Root>
    )
}