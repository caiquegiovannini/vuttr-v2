import Add from '../../assets/add.svg'

import './styles.css'

export function Actions() {
    return (
        <aside className='actions-container'>
            <button
                className='add-button'
            >
                <img src={Add} alt='' />
            </button>
        </aside>
    )
}