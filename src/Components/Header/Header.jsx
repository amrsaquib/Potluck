import './Header.scss'
import logo from '../../Assets/logo.svg'

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} />
        </header>
    )
}