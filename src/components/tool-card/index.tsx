import { Tool } from '../../types'
import TrashIcon from '../../assets/trash.svg'

import './styles.css'

export function ToolCard({ id, title, url, description, tags }: Tool) {
    return (
        <article className='tool-card' id={id}>
            <header className='tool-card__header'>
                <h3>
                    <a
                        href={url}
                        target='_blank'
                    >{title}</a>
                </h3>
                <button className='tool-card__header__remove-button'>
                    <img src={TrashIcon} alt="trash can" />
                </button>
            </header>
            <p className='tool-card__description'>{description}</p>
            <footer className='tool-card__footer'>
                {tags.map(tag => (
                    <span key={tag} className='tool-card__footer__tag'>#{tag}</span>
                ))}
            </footer>
        </article>
    )
}