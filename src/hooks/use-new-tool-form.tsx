import { FormEvent, useContext, useState } from 'react'
import { ToolPayload } from '../api/types'
import { formatToArray, formatToUrl, cleanString } from '../utils/string-utils'
import { ToolsContext } from '../contexts/tools-context'

interface UseNewToolFormProps {
    toggleOpenModal: () => void
}

function useNewToolForm({ toggleOpenModal }: UseNewToolFormProps) {
    const { addNewTool } = useContext(ToolsContext)
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const payload: ToolPayload = {
            title: cleanString(toolTitle),
            url: formatToUrl(toolUrl),
            description: cleanString(toolDescription),
            tags: formatToArray(toolTags),
        }
        await addNewTool(payload)
        setIsLoading(false)
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
        handleChangeTitle,
        handleChangeUrl,
        handleChangeDescription,
        handleChangeTags,
        handleSubmit,
        isLoading,
    }
}

export { useNewToolForm }