import './Itemv2.scss'
import image from '../../Assets/sample-food-img.jpeg'
import trash from '../../Assets/trash-icon.svg'

export default function Itemv2({item}) {
    return (
        <div className='itemv2'>
            <div className='itemv2__left'>
                <img className='itemv2__image' src={image} />
            </div>
            <div className='itemv2__right'>
                <p className='itemv2__name'>{item.name}</p>
                <p className='itemv2__description'>{item.description}</p>
                <div className='itemv2__bottom'>
                    <p className='itemv2__price'>{item.price}</p>
                    {/*<div className='itemv2__buttons' >
                        <button className='itemv2__button'>Edit Item</button>
                        <button className='itemv2__button'><img src={trash} className='itemv2__icon' /></button>
    </div>*/}
                </div>
            </div>
        </div>
    )
}