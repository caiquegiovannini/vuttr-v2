import { Tool } from '../../types'
import TrashIcon from '../../assets/trash.svg'

import './styles.css'
import { useContext } from 'react'
import { ToolsContext } from '../../contexts/tools-context'

export function ToolCard({ id, title, url, description, tags }: Tool) {
    const { handleRemoveTool } = useContext(ToolsContext)
    return (
        <article className='tool-card' id={id} aria-labelledby={`tool-card-title-${id}`}>
            <header className='tool-card__header'>
                <h3 id={`tool-card-title-${id}`}>
                    <a
                        href={url}
                        target='_blank'
                    >{title}</a>
                </h3>
                <button className='tool-card__header__remove-button' onClick={() => handleRemoveTool(id)}>
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