import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Add from '../../assets/add.svg'
import { NewToolModal } from './new-tool-modal'

import './styles.css'
import { Input } from '../input'

export function Actions() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpenModal() {
        setIsOpen(currentState => !currentState)
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={toggleOpenModal}>
            <aside className='actions-container'>
                <div className='actions-container__filter'>
                    <Input id='filter' placeholder='filter by title' aria-label='tool filter' />
                </div>
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