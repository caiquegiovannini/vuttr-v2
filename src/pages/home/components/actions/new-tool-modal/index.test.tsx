import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MockAdapter from 'axios-mock-adapter'
import { ToolsProvider } from '../../../../../contexts/tools-context'
import { api } from '../../../../../services/client'
import { NewToolModal } from '.'


describe('New Tool Modal', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })

    it('should show Add new tool title', () => {
        render(<ToolsProvider><NewToolModal isOpen={true} toggleOpenModal={jest.fn()} /></ToolsProvider>)

        expect(screen.getByRole('heading', { name: 'Add new tool' })).toBeInTheDocument()
    })

    it.each([
        {
            typedValues: {
                title: 'Nice tool',
                url: 'linkto.nice.tool',
                description: 'This is a very nice tool',
                tags: ['nice-tool', 'awesome-tool'],
            },
            expectedValues: {
                title: 'Nice tool',
                url: 'https://linkto.nice.tool',
                description: 'This is a very nice tool',
                tags: ['nice-tool', 'awesome-tool'],
            },
        },
        {
            typedValues: {
                title: ' Tool with space  ',
                url: '  link.with.spaces ',
                description: ' This description has space after and before   ',
                tags: ['   ', '   space-tag   '],
            },
            expectedValues: {
                title: 'Tool with space',
                url: 'https://link.with.spaces',
                description: 'This description has space after and before',
                tags: ['space-tag'],
            },
        },
    ])('should send a requisition with the correct fields values', async ({ typedValues, expectedValues }) => {
        const mock = new MockAdapter(api)
        mock.onPost('/tools', expectedValues).replyOnce(201)
        const spy = jest.spyOn(api, 'post')
        render(<ToolsProvider><NewToolModal isOpen={true} toggleOpenModal={jest.fn()} /></ToolsProvider>)

        await userEvent.type(screen.getByLabelText('Tool title'), typedValues.title)
        await userEvent.type(screen.getByLabelText('Tool url'), typedValues.url)
        await userEvent.type(screen.getByLabelText('Tool description'), typedValues.description)
        await userEvent.type(screen.getByLabelText('Tags'), typedValues.tags.join(' '))
        await userEvent.click(screen.getByRole('button', { name: 'Add tool' }))

        expect(spy).toHaveBeenCalledWith('tools', expectedValues)
    })
})