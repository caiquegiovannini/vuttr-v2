import { Header } from '../../components/header'
import { Actions } from '../../components/actions'
import { ToolsList } from '../../components/tools-list'

import './styles.css'

export function Home() {
    return (
        <section className='home-container'>
            <Header />
            <Actions />
            <ToolsList />
        </section>
    )
}