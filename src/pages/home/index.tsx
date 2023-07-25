import { useContext, useEffect } from 'react'
import { ToolsContext } from '../../contexts/tools-context'
import { Header } from '../../components/header'
import { Actions } from '../../components/actions'
import { ToolsList } from '../../components/tools-list'

import './styles.css'

export function Home() {
    const { fetchTools } = useContext(ToolsContext)

    useEffect(() => {
        fetchTools()
    }, [fetchTools])

    return (
        <section className='home-container'>
            <Header />
            <Actions />
            <ToolsList />
        </section>
    )
}