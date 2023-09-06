import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import userEvent from '@testing-library/user-event'
import { Home } from './'
import { ToolsProvider } from '../../contexts/tools-context'
import { api } from '../../services/client'

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
    {
        id: '100',
        title: 'ChatOverflow',
        url: 'chatoverflow.com',
        description: 'Lorem ipsum dolor sit amet',
        tags: ['chat', 'overflow', 'baita', 'ia'],
    },
]

describe('Home', () => {
    let mock: MockAdapter

    beforeEach(() => {
        mock = new MockAdapter(api)
        mock.onGet('/tools').replyOnce(200, toolsMock)
    })
    afterEach(() => {
        mock.reset()
    })

    it.each([
        {
            filter: 'chat',
            expectedLength: 2,
            expectedToolsToRender: [
                'ChatGPT',
                'ChatOverflow',
            ],
            expectedToolsNotToRender: [
                'StackOverflow',
            ],
        },
        {
            filter: 'overflow',
            expectedLength: 2,
            expectedToolsToRender: [
                'StackOverflow',
                'ChatOverflow',
            ],
            expectedToolsNotToRender: [
                'ChatGPT',
            ],
        },
        {
            filter: 'gpt',
            expectedLength: 1,
            expectedToolsToRender: [
                'ChatGPT',
            ],
            expectedToolsNotToRender: [
                'StackOverflow',
                'ChatOverflow',
            ],
        },
        {
            filter: 'stack',
            expectedLength: 1,
            expectedToolsToRender: [
                'StackOverflow',
            ],
            expectedToolsNotToRender: [
                'ChatGPT',
                'ChatOverflow',
            ],
        },
        {
            filter: 'chatoverflow',
            expectedLength: 1,
            expectedToolsToRender: [
                'ChatOverflow',
            ],
            expectedToolsNotToRender: [
                'ChatGPT',
                'StackOverflow',
            ],
        },
    ])('should filter tools by title', async ({
        filter,
        expectedLength,
        expectedToolsToRender,
        expectedToolsNotToRender,
    }) => {
        render(<ToolsProvider><Home /></ToolsProvider>)

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'))

        const chatGPTTool = screen.getByRole('heading', { name: toolsMock[0].title })
        const stackOverflowTool = screen.getByRole('heading', { name: toolsMock[1].title })
        const chatOverflowTool = screen.getByRole('heading', { name: toolsMock[2].title })

        expect(chatGPTTool).toBeInTheDocument()
        expect(stackOverflowTool).toBeInTheDocument()
        expect(chatOverflowTool).toBeInTheDocument()

        const filterInput = screen.getByPlaceholderText('filter by title')
        await userEvent.type(filterInput, filter)

        expect(screen.getAllByRole('article')).toHaveLength(expectedLength)

        const toolsList = screen.getByRole('main', { name: 'list of tools' })
        expect(within(toolsList))

        expectedToolsToRender.map(toolTitle => {
            const toolTitleInList = within(toolsList).getByRole('heading', { name: toolTitle })
            expect(toolTitleInList).toBeInTheDocument()
        })

        expectedToolsNotToRender.map(toolTitle => {
            const toolTitleInList = within(toolsList).queryByRole('heading', { name: toolTitle })
            expect(toolTitleInList).not.toBeInTheDocument()
        })
    })
    it('should open modal when Add new button was clicked', async () => {
        mock.onGet('/tools').reply(200, toolsMock)
        render(<ToolsProvider><Home /></ToolsProvider>)

        expect(screen.queryByRole('heading', { name: 'Add new tool' })).not.toBeInTheDocument()

        const addNewButton = screen.getByRole('button', { name: 'Add new tool' })
        await userEvent.click(addNewButton)

        expect(screen.getByRole('heading', { name: 'Add new tool' })).toBeInTheDocument()

        const closeButton = screen.getByRole('button', { name: 'Close button' })
        await userEvent.click(closeButton)

        expect(screen.queryByRole('heading', { name: 'Add new tool' })).not.toBeInTheDocument()
    })
})