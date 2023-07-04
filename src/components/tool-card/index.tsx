import TrashIcon from '../../assets/trash.svg'

import './styles.css'

interface ToolCardProps {
    title: string
    url: string
    description: string
    tags: string[]  // cada tag precisa ser única
}

export function ToolCard({ title, url, description, tags }: ToolCardProps) {
    return (
        <article className='tool-card'>
            <header className='tool-card__header'>
                <h3>
                    <a
                        href={`https://${url}`}
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