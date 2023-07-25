import { ReactNode, createContext, useCallback, useState } from 'react'
import { Tool } from '../../types'
import { addTool, getTools } from '../../api/tools'
import { ToolPayload } from '../../api/types'

interface ToolsContextType {
    tools: Tool[]
    isLoading: boolean
    fetchTools: () => Promise<void>
    addNewTool: (payload: ToolPayload) => Promise<void>
}

interface ToolsProviderProps {
    children: ReactNode
  }

export const ToolsContext = createContext({} as ToolsContextType)

export function ToolsProvider({children}: ToolsProviderProps) {
    const [tools, setTools] = useState<Tool[]>([])
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <ToolsContext.Provider value={{
            tools,
            isLoading,
            fetchTools,
            addNewTool,
        }}>
            {children}
        </ToolsContext.Provider>
    )
}