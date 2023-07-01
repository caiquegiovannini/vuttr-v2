import './styles.css'

interface ToolCardProps {
    title: string
    description: string
    tags: string[]  // cada tag precisa ser única
}

export function ToolCard({title, description, tags}: ToolCardProps) {
    return (
        <article className='tool-card'>
            <header className='tool-card__header'>
                <h3>
                    <a href="#">{title}</a>
                </h3>
                <a href="#">
                    <h3>{title}</h3>
                </a>
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