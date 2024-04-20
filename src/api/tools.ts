import { api } from '../services/client'
import { Tool } from '../types'
import { ToolPayload } from './types'

export const getTools = async (): Promise<Tool[]> => (await api.get('api/tools')).data
export const addTool = async (payload: ToolPayload): Promise<{data: Tool}> => await api.post('api/tools', payload)
export const removeTool = async (id: string): Promise<void> => await api.delete(`api/tools/${id}`)