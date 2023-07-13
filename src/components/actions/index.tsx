import * as Dialog from '@radix-ui/react-dialog';
import Add from '../../assets/add.svg'

import './styles.css'
import { Input } from '../input';

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
            <Dialog.Portal>
                <Dialog.Overlay className='modal__overlay' />
                <Dialog.Content className='modal'>
                    <Dialog.Title className='modal__title'>
                        Add new tool
                    </Dialog.Title>
                    <form className='modal__form'>
                        <Input id='tool-name' label='Tool name' />
                        <Input id='tool-link' label='Tool link' prefix='https://' />
                        <Input id='tool-tags' label='Tags' placeholder='separate tags by space' />
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