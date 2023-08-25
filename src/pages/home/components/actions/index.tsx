import { useContext, useState } from 'react'

import Add from '../../../../assets/add.svg'
import { ToolsContext } from '../../../../contexts/tools-context'
import { Input } from '../../../../components/input'
import { NewToolModal } from './new-tool-modal'
import './styles.css'

export function Actions() {
    const { handleChangeFilter } = useContext(ToolsContext)
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpenModal() {
        setIsOpen(currentState => !currentState)
    }

    return (
        <aside className='actions-container'>
            <div className='actions-container__filter'>
                <Input
                    id='filter'
                    placeholder='filter by title'
                    aria-label='tool filter'
                    onChange={e => handleChangeFilter(e.target.value)}
                />
            </div>

            <button
                className='add-button'
                aria-label='Add new tool'
                onClick={() => setIsOpen(true)}
            >
                <img src={Add} alt='' />
            </button>

            <NewToolModal isOpen={isOpen} toggleOpenModal={toggleOpenModal} />
        </aside>
    )
}