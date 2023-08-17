import { useContext, useEffect } from 'react'
import { ToolsContext } from '../../contexts/tools-context'
import { ToolCard } from '../tool-card'

import './styles.css'

export function ToolsList() {
    const { fetchTools, toolsToRender } = useContext(ToolsContext)

    useEffect(() => {
        fetchTools()
    }, [fetchTools])

    return (
        <main className='tools-list'>
            {toolsToRender.length > 0 ? (
                toolsToRender.map(tool => (
                    <ToolCard
                        key={tool.id}
                        id={tool.id}
                        title={tool.title}
                        url={tool.url}
                        description={tool.description}
                        tags={tool.tags}
                    />
                ))) : (
                <h2>Loading...</h2>
            )}
        </main>
    )
}