import { render, screen } from '@testing-library/react'
import { Input } from './'

describe('Input', () => {
    it('should render with label', () => {
        render(<Input id='input-test' label='Testee' />)

        expect(screen.getByLabelText('Testee')).toBeInTheDocument()
    })
})