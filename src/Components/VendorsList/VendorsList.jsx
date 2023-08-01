import './VendorsList.scss'
import Vendor from '../Vendor/Vendor'
import { Link } from 'react-router-dom'

export default function VendorsList({vendors}) {
    let vendorItems = vendors.map((vendor) => {
        return <Link className="vendor-list__link" to={`./vendor/${vendor._id}`}><Vendor key={vendor._id} vendor={vendor}/></Link>
    })
    return (
        <div className='vendor-list'>
            {vendorItems}
        </div>
    )
}