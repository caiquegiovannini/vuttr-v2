import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToolsProvider } from '../../../../contexts/tools-context'
import { Actions } from '.'

jest.mock('./new-tool-modal', () => ({
    NewToolModal: () => <div>New tool modal</div>,
}))

describe('Actions', () => {
    it('should open modal when add new button was clicked', async () => {
        render(<ToolsProvider><Actions /></ToolsProvider>)

        expect(screen.queryByText('New tool modal')).not.toBeInTheDocument()

        const addNewButton = screen.getByRole('button', { name: 'Add new tool' })
        await userEvent.click(addNewButton)

        expect(screen.getByText('New tool modal')).toBeInTheDocument()
    })
})