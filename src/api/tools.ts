import { api } from '../services/client'
import { Tool } from '../types'
import { ToolPayload } from './types'

export const getTools = async (): Promise<Tool[]> => (await api.get('tools')).data
export const addTool = async (payload: ToolPayload): Promise<{data: Tool}> => await api.post('tools', payload)