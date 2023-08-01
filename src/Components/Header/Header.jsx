import './Header.scss'
import logo from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <Link to="/"><img className='header__logo' src={logo} /></Link>
        </header>
    )
}