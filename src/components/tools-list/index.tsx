import { useContext } from 'react'
import { ToolsContext } from '../../contexts/tools-context'
import { ToolCard } from '../tool-card'

import './styles.css'

export function ToolsList() {
    const { tools } = useContext(ToolsContext)

    return (
        <main className='tools-list'>
            {tools.map(tool => (
                <ToolCard
                    key={tool.id}
                    id={tool.id}
                    title={tool.title}
                    url={tool.url}
                    description={tool.description}
                    tags={tool.tags}
                />
            ))}
        </main>
    )
}