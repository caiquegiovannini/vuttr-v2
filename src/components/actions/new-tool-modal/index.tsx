import * as Dialog from '@radix-ui/react-dialog';

import Add from '../../../assets/add.svg'
import { Input } from '../../input';
import { Textarea } from '../../textarea';

import './styles.css'

export function NewToolModal() {
    return (
            <Dialog.Portal>
                <Dialog.Overlay className='modal__overlay' />
                <Dialog.Content className='modal'>
                    <Dialog.Title className='modal__title'>
                        Add new tool
                    </Dialog.Title>
                    <form className='modal__form'>
                        <Input id='tool-name' label='Tool name' />
                        <Input id='tool-link' label='Tool link' prefix='https://' />
                        <Textarea id='tool-description' label='Tool description'>
                            nada
                        </Textarea>
                        <Input id='tool-tags' label='Tags' placeholder='separate tags by space' />
                        <Dialog.Close asChild>
                            <button 
                                type='submit' 
                                className='modal__add-tool-button'
                            >
                                Add tool
                            </button>
                        </Dialog.Close>
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