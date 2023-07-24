import * as Dialog from '@radix-ui/react-dialog';

import Add from '../../assets/add.svg'
import { NewToolModal } from './new-tool-modal';

import './styles.css'

export function Actions() {
    return (
        <Dialog.Root>
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
            <NewToolModal />
        </Dialog.Root>
    )
}