import './Itemv2.scss'
import image from '../../Assets/sample-food-img.jpeg'
import trash from '../../Assets/trash-icon.svg'

export default function Itemv2() {
    return (
        <div className='itemv2'>
            <div className='itemv2__left'>
                <img className='itemv2__image' src={image} />
            </div>
            <div className='itemv2__right'>
                <p className='itemv2__name'>Amr's Kitchen</p>
                <p className='itemv2__description'>Serving you the best food in the GTA. No one compares to me. Everyone else sucks. Eat here!</p>
                <div className='itemv2__bottom'>
                    <p className='itemv2__price'>$18.99</p>
                    <div className='itemv2__buttons' >
                        <button className='itemv2__button'>Edit Item</button>
                        <button className='itemv2__button'><img src={trash} className='itemv2__icon' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}