import { useEffect, useState } from 'react'
import { Tool } from '../../types'
import { ToolsList } from '../../components/tools-list'
import { getTools } from '../../api/tools'

import './styles.css'

export function Home() {
    const [tools, setTools] = useState<Tool[]>([])

    useEffect(() => {
        async function fetchTools() {
            try {
                const result = await getTools()
                setTools(result)
            } catch (error) {
                console.error(error) // TODO: lançar toast com erro
            }
        }

        fetchTools()
    }, [])

    return (
        <section className='container'>
            <h1 className='title'>VUTTR</h1>
            <h2 className='subtitle'>Very Useful Tools To Remember</h2>
            <div style={{ marginTop: '48px' }} />
            <ToolsList tools={tools} />
        </section>
    )
}