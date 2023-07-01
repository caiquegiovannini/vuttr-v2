import { ToolCard } from '../../components/tool-card'
import './styles.css'

export function Home() {
    return (
        <section className='container'>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools To Remember</h2>
            <div style={{marginTop: '48px'}} />
            <ToolCard
                title='Notion'
                description='lorem ipsum dolor balsda as asdjpas asḱf aof aas daoskdkoa'
                tags={['organization', 'planning', 'collaboration']}
            />
        </section>
    )
}