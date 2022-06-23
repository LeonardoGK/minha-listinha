import LogoImage from "../../assets/svg_20220614_165258_0000 (1).png"

import './header.styles.css'

const Header = () => {
    return (
        <header className="header">
            <div>
                <img src={LogoImage} alt='logotipo minha listinha com imgem de avião' />
            </div>
        </header>
    )
}

export default Header