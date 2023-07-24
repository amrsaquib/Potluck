import './Vendor.scss'
import image from '../../Assets/sample-food-img.jpeg'

export default function Vendor() {
    return (
        <div className='vendor'>
            <div className='vendor__left'>
                <img className='vendor__image' src={image} />
            </div>
            <div className='vendor__right'>
                <p className='vendor__name'>Amr's Kitchen</p>
                <p className='vendor__description'>Serving you the best food in the GTA. No one compares to me. Everyone else sucks. Eat here!</p>
            </div>
        </div>
    )
}