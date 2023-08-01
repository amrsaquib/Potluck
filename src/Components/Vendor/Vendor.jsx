import './Vendor.scss'
import image from '../../Assets/sample-food-img.jpeg'

export default function Vendor({vendor}) {
    return (
        <div className='vendor'>
            <div className='vendor__left'>
                <img className='vendor__image' src={image} />
            </div>
            <div className='vendor__right'>
                <p className='vendor__name'>{vendor.name}</p>
                <p className='vendor__description'>{vendor.description}</p>
            </div>
        </div>
    )
}