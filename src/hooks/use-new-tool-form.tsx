import { FormEvent, useCallback, useState } from 'react'
import { ToolPayload } from '../api/types'
import { addTool } from '../api/tools'
import { Tool } from '../types'
import { formatToArray, formatToUrl, cleanString } from '../utils/string-utils'

interface UseNewToolFormProps {
    updateTools: (newTool: Tool) => void
    toggleOpenModal: () => void
}

function useNewToolForm({ updateTools, toggleOpenModal }: UseNewToolFormProps) {
    const [toolTitle, setToolTitle] = useState('')
    const [toolUrl, setToolUrl] = useState('')
    const [toolDescription, setToolDescription] = useState('')
    const [toolTags, setToolTags] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function handleChangeTitle(title: string) {
        setToolTitle(title)
    }

    function handleChangeUrl(url: string) {
        setToolUrl(url)
    }

    function handleChangeDescription(description: string) {
        setToolDescription(description)
    }

    function handleChangeTags(tags: string) {
        setToolTags(tags)
    }

    const addNewTool = useCallback(async (payload: ToolPayload) => {
        try {
            setIsLoading(true)
            const response = await addTool(payload)
            updateTools(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }, [updateTools])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const payload: ToolPayload = {
            title: cleanString(toolTitle),
            url: formatToUrl(toolUrl),
            description: cleanString(toolDescription),
            tags: formatToArray(toolTags),
        }

        await addNewTool(payload)
        toggleOpenModal()
        cleanFields()
    }

    function cleanFields() {
        setToolTitle('')
        setToolUrl('')
        setToolDescription('')
        setToolTags('')
    }

    return {
        toolTitle,
        toolUrl,
        toolDescription,
        toolTags,
        isLoading,
        handleChangeTitle,
        handleChangeUrl,
        handleChangeDescription,
        handleChangeTags,
        handleSubmit,
    }
}

export { useNewToolForm }