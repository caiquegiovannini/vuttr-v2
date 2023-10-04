import { ReactNode, createContext, useCallback, useState } from 'react'
import { Tool } from '../../types'
import { getTools, removeTool } from '../../api/tools'

interface ToolsContextType {
    toolsToRender: Tool[]
    fetchTools: () => Promise<void>
    updateTools: (newTool: Tool) => void
    handleRemoveTool: (id: string) => Promise<void>
    handleChangeFilter: (filterTerm: string) => void
}

interface ToolsProviderProps {
    children: ReactNode
}

export const ToolsContext = createContext({} as ToolsContextType)

export function ToolsProvider({ children }: ToolsProviderProps) {
    const [tools, setTools] = useState<Tool[]>([])
    const [filter, setFilter] = useState('')

    const toolsToRender = filter ? tools.filter(tool => tool.title.match(new RegExp(filter.trim(), 'i'))) : tools

    const fetchTools = useCallback(async () => {
        try {
            const result = await getTools()
            setTools(result)
        } catch (error) {
            console.error(error) // TODO: lançar toast com erro
        }
    }, [])

    const updateTools = useCallback((newTool: Tool) => {
        setTools(currentTools => [...currentTools, newTool])
    }, [])

    const handleRemoveTool = useCallback(async (id: string) => {
        try {
            await removeTool(id)
            setTools(currentTools => currentTools.filter(tool => tool.id !== id))
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleChangeFilter = useCallback((filterTerm: string) => {
        setFilter(filterTerm)
    }, [])

    return (
        <ToolsContext.Provider value={{
            toolsToRender,
            fetchTools,
            updateTools,
            handleRemoveTool,
            handleChangeFilter,
        }}>
            {children}
        </ToolsContext.Provider>
    )
}