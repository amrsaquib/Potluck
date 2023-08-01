import './Footer.scss'
import home from '../../Assets/home-icon.svg'
import kitchen from  '../../Assets/kitchen-icon.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <Link to="/"><img src={home} className='footer__icon'/></Link>
            </div>
            <div className='footer__section'>
                <Link to="/my-kitchen"><img src={kitchen} className='footer__icon'/></Link>
            </div>
        </div>
    )
}