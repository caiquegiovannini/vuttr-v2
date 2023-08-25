import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import userEvent from '@testing-library/user-event'
import { api } from '../../../../services/client'
import { ToolsProvider } from '../../../../contexts/tools-context'
import { ToolsList } from './'

const toolsMock = [
    {
        id: '98',
        title: 'ChatGPT',
        url: 'chatgpt.com',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed cursus elit.',
        tags: ['ia', 'chat'],
    },
    {
        id: '99',
        title: 'StackOverflow',
        url: 'stackoverflow.com',
        description: 'Lorem ipsum dolor sit amet',
        tags: ['help', 'ctrlC', 'ctrlV', 'ia'],
    },
]

describe('Tools list', () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(api)
        mock.onGet('/tools').replyOnce(200, toolsMock)
    })

    afterEach(() => {
        mock.reset()
    })

    it('should render list of tools', async () => {
        const spy = jest.spyOn(api, 'get')
        render(<ToolsProvider><ToolsList /></ToolsProvider>)

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
        expect(spy).toHaveBeenCalled()

        const card1Title = await screen.findByText(toolsMock[0].title)
        const card1Description = screen.getByText(toolsMock[0].description)
        const card1 = await screen.findByRole('article', { name: toolsMock[0].title })
        expect(card1Title).toBeInTheDocument()
        expect(card1Description).toBeInTheDocument()
        expect(within(card1).getByText(/ia/)).toBeInTheDocument()
        expect(within(card1).getByText(/chat/)).toBeInTheDocument()

        const card2Title = await screen.findByText(toolsMock[1].title)
        const card2Description = screen.getByText(toolsMock[1].description)
        const card2 = await screen.findByRole('article', { name: toolsMock[1].title })
        expect(card2Title).toBeInTheDocument()
        expect(card2Description).toBeInTheDocument()
        expect(within(card2).getByText(/help/)).toBeInTheDocument()
        expect(within(card2).getByText(/ctrlC/)).toBeInTheDocument()
        expect(within(card2).getByText(/ctrlV/)).toBeInTheDocument()
        expect(within(card2).getByText(/ia/)).toBeInTheDocument()
    })

    it('should remove one tool when user click on the trash button', async () => {
        mock.onDelete(`/tools/${toolsMock[1].id}`).replyOnce(200)
        const spy = jest.spyOn(api, 'delete')
        render(<ToolsProvider><ToolsList /></ToolsProvider>)

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

        const card = await screen.findByRole('article', { name: toolsMock[1].title })
        expect(card).toBeInTheDocument()

        const removeButton = within(card).getByRole('button', { name: 'Remove tool' })
        await userEvent.click(removeButton)

        const toolsList = screen.getByRole('main', { name: 'list of tools' })
        expect(spy).toHaveBeenCalledWith('tools/99')
        expect(card).not.toBeInTheDocument()
        expect(toolsList).not.toContain(card)
        expect(screen.getAllByRole('article').length).toBe(1)
    })
})