import { useContext, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import Add from '../../assets/add.svg'
import { ToolsContext } from '../../contexts/tools-context'
import { NewToolModal } from './new-tool-modal'

import { Input } from '../input'
import './styles.css'

export function Actions() {
    const { handleChangeFilter } = useContext(ToolsContext)
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpenModal() {
        setIsOpen(currentState => !currentState)
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={toggleOpenModal}>
            <aside className='actions-container'>
                <div className='actions-container__filter'>
                    <Input
                        id='filter'
                        placeholder='filter by title'
                        aria-label='tool filter'
                        onChange={e => handleChangeFilter(e.target.value)}
                    />
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