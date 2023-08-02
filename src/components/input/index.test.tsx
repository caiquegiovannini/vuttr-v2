import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './'

describe('Input', () => {
    it('should render with label', () => {
        render(<Input id='input-test' label='Teste' />)

        expect(screen.getByLabelText('Testee')).toBeInTheDocument()
    })

    it.only('should render prefix', async () => {
        render(<Input id='input-test' prefix='https://' label='Input top' />)

        const input = screen.getByLabelText('Input top')
        expect(input).toBeInTheDocument()
        expect(screen.getByText('Input top')).toBeInTheDocument()

        await userEvent.type(input, 'google.com')

        expect(screen.getByText('https://')).toBeInTheDocument()
        expect(input).toHaveDisplayValue('google.com')
    })
})