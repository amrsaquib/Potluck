import './ItemList.scss'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

export default function ItemList() {
    return (
        <div className='item-list'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    )
}