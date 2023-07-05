import { Tool } from '../../types'
import { ToolCard } from '../tool-card'

import './styles.css'

interface ToolsListProps {
    tools: Tool[]
}

export function ToolsList({tools}:ToolsListProps) {
    return (
        <main className='tools-list'>
            {tools.map(tool => (
                <ToolCard
                    title={tool.title}
                    url={tool.url}
                    description={tool.description}
                    tags={tool.tags}
                />
            ))}
        </main>
    )
}