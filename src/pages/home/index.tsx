import { ToolCard } from '../../components/tool-card'
import './styles.css'

export function Home() {
    return (
        <section className='container'>
            <h1 className='title'>VUTTR</h1>
            <h2 className='subtitle'>Very Useful Tools To Remember</h2>
            <div style={{ marginTop: '48px' }} />
            <ToolCard
                title='Notion'
                url='notion.so'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed cursus elit. Sed risus ex, egestas pulvinar felis eu, dapibus congue est. Pellentesque dictum consequat ex ac tristique. Nullam quis pulvinar nulla.'
                tags={['organization', 'planning', 'collaboration']}
            />
        </section>
    )
}