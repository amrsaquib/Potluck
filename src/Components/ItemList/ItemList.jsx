import './ItemList.scss'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function ItemList({items, cart, setCart}) {
    let itemList = undefined
    if(items) {
        itemList = items.map((item) => {
            return <Item item={item} cart={cart} setCart={setCart}/>
        })
    }
    return (
        <div className='item-list'>
            {!!items ? itemList : <p>Loading...</p>}
        </div>
    )
}