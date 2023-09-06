import { ReactNode, createContext, useCallback, useState } from 'react'
import { Tool } from '../../types'
import { addTool, getTools, removeTool } from '../../api/tools'
import { ToolPayload } from '../../api/types'

interface ToolsContextType {
    toolsToRender: Tool[]
    filter: string
    isLoading: boolean
    fetchTools: () => Promise<void>
    addNewTool: (payload: ToolPayload) => Promise<void>
    handleRemoveTool: (id: string) => Promise<void>
    handleChangeFilter: (filterTerm: string) => void
}

interface ToolsProviderProps {
    children: ReactNode
}

export const ToolsContext = createContext({} as ToolsContextType)

export function ToolsProvider({ children }: ToolsProviderProps) {
    const [tools, setTools] = useState<Tool[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [filter, setFilter] = useState('')

    const toolsToRender = filter ? tools.filter(tool => tool.title.toLowerCase().includes(filter)) : tools

    const fetchTools = useCallback(async () => {
        try {
            const result = await getTools()
            setTools(result)
        } catch (error) {
            console.error(error) // TODO: lançar toast com erro
        }
    }, [])

    const addNewTool = useCallback(async (payload: ToolPayload) => {
        try {
            setIsLoading(true)
            const response = await addTool(payload)
            setTools(currentTools => [...currentTools, response.data])
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }

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
        const filterTermFormatted = filterTerm.trim().toLocaleLowerCase()
        setFilter(filterTermFormatted)
    }, [])

    return (
        <ToolsContext.Provider value={{
            toolsToRender,
            filter,
            isLoading,
            fetchTools,
            addNewTool,
            handleRemoveTool,
            handleChangeFilter,
        }}>
            {children}
        </ToolsContext.Provider>
    )
}