import './Item.scss'
import image from '../../Assets/sample-food-img.jpeg'

export default function Item() {
    return (
        <div className='item'>
            <div className='item__left'>
                <img className='item__image' src={image} />
            </div>
            <div className='item__right'>
                <p className='item__name'>Amr's Kitchen</p>
                <p className='item__description'>Serving you the best food in the GTA. No one compares to me. Everyone else sucks. Eat here!</p>
                <div className='item__bottom'>
                    <p className='item__price'>$18.99</p>
                    <button className='item__button'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}