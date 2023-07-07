import { api } from "../services/client";

export const getTools = async () => (await api.get('tools')).data