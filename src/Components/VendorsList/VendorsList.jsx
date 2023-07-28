import './VendorsList.scss'
import Vendor from '../Vendor/Vendor'
import { Link } from 'react-router-dom'

export default function VendorsList() {
    return (
        <div className='vendor-list'>
            <Vendor />
            <Vendor />
            <Vendor />
            <Vendor />
            <Vendor />
            <Vendor />
            <Vendor />
        </div>
    )
}