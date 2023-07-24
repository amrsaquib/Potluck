import './Footer.scss'
import home from '../../Assets/home-icon.svg'
import settings from  '../../Assets/settings-icon.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <img src={home} className='footer__icon'/>
            </div>
            <div className='footer__section'>
                <img src={settings} className='footer__icon'/>
            </div>
        </div>
    )
}