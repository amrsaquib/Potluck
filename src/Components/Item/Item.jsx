import './Item.scss'
import image from '../../Assets/sample-food-img.jpeg'

export default function Item({item, cart, setCart}) {
    let clickHandler = () => {
        if(cart.items[item.name] === undefined) {
            let newObj = {...cart}
            let arr = [1, item.price]
            newObj.items[item.name] = arr
            newObj.totalPrice += Number(item.price)
            setCart(newObj)
            
        } else {
            let newObj = {...cart}
            newObj.items[item.name][0] += 1
            newObj.totalPrice += Number(item.price)
            setCart(newObj)
        }
    }
    return (
        <div className='item'>
            <div className='item__left'>
                <img className='item__image' src={image} />
            </div>
            <div className='item__right'>
                <p className='item__name'>{item.name}</p>
                <p className='item__description'>{item.description}</p>
                <div className='item__bottom'>
                    <p className='item__price'>${item.price}</p>
                    <button className='item__button' onClick={clickHandler}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}