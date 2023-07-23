import { api } from "../services/client";
import { Tool } from "../types";

export const getTools = async (): Promise<Tool[]> => (await api.get('tools')).data
