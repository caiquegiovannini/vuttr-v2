import { render, screen } from '@testing-library/react'
import { ToolCard } from './'


describe('Tool card', () => {
    it('should render card with tool specification', () => {
        const title = 'Título teste'
        const description = 'Uma descrição incrível'
        const tags = ['teste', 'react', 'jest']
        render(<ToolCard id="teste" title={title} description={description} url={'teste.net'} tags={tags} />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(description)).toBeInTheDocument()
        expect(screen.getByText(`#${tags[0]}`)).toBeInTheDocument()
        expect(screen.getByText(`#${tags[1]}`)).toBeInTheDocument()
        expect(screen.getByText(`#${tags[2]}`)).toBeInTheDocument()
    })
})