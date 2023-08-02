import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from './'

describe('Textarea', () => {
    it('should render with label', async () => {
        const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing'
        render(<Textarea id='textarea-test' label='Description' />)

        const textarea = screen.getByLabelText('Description')
        await userEvent.type(textarea, text)

        expect(textarea).toHaveDisplayValue(text)
    })
})