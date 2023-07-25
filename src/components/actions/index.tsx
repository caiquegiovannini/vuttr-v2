import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Add from '../../assets/add.svg'
import { NewToolModal } from './new-tool-modal'

import './styles.css'

export function Actions() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpenModal() {
        setIsOpen(currentState => !currentState)
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={toggleOpenModal}>
            <aside className='actions-container'>
                <Dialog.Trigger asChild>
                    <button
                        className='add-button'
                        aria-label='Add new tool button'
                    >
                        <img src={Add} alt='' />
                    </button>
                </Dialog.Trigger>
            </aside>
            <NewToolModal toggleOpenModal={toggleOpenModal} />
        </Dialog.Root>
    )
}