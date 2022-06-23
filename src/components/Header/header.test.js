import Header from './Header';
import { render, screen } from '@testing-library/react'

describe('Header component', ()=>{
    it('should render the correct header', async () => {
        render (<Header />)

        const LogoImage = await screen.findByAltText('logotipo minha listinha com imgem de avião')
        expect(LogoImage).toBeInTheDocument()
    })
})