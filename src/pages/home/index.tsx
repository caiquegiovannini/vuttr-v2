import { ToolsList } from '../../components/tools-list'

import './styles.css'

const tools = [
    {
        title: 'Notion',
        url: 'notion.so',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed cursus elit. Sed risus ex, egestas pulvinar felis eu, dapibus congue est. Pellentesque dictum consequat ex ac tristique. Nullam quis pulvinar nulla.',
        tags: ['organization', 'planning', 'collaboration'],
    },
    {
        title: 'json-server',
        url: 'github.com/typicode/json-server',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed cursus elit. Sed risus ex, egestas pulvinar felis eu, dapibus congue est. Pellentesque dictum consequat ex ac tristique. Nullam quis pulvinar nulla.',
        tags: ['api', 'json', 'schema', 'node'],
    },
    {
        title: 'fastify',
        url: 'fastify.io',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed cursus elit. Sed risus ex, egestas pulvinar felis eu, dapibus congue est. Pellentesque dictum consequat ex ac tristique. Nullam quis pulvinar nulla.',
        tags: ['web', 'framework', 'node', 'https'],
    },
    {
        title: 'Google',
        url: 'google.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed cursus elit. Sed risus ex, egestas pulvinar felis eu, dapibus congue est. Pellentesque dictum consequat ex ac tristique. Nullam quis pulvinar nulla.',
        tags: ['search', 'research'],
    },
]

export function Home() {
    return (
        <section className='container'>
            <h1 className='title'>VUTTR</h1>
            <h2 className='subtitle'>Very Useful Tools To Remember</h2>
            <div style={{ marginTop: '48px' }} />
            <ToolsList tools={tools} />
        </section>
    )
}