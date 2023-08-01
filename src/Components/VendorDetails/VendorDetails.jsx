import { Link, useNavigate } from "react-router-dom";
import back from "../../Assets/back-icon.svg";
import cartImage from '../../Assets/cart-icon.svg'
import ItemList from "../ItemList/ItemList";
import "./VendorDetails.scss";

export default function VendorDetails({currVendor, cart, setCart}) {
  let navigate = useNavigate()
  let clickHandler = () => {
    
    navigate("./checkout")
  }
  
  return (
    <div className="vendor-details">
      <div className="vendor-details__card">
        <div className="vendor-details__header">
          <div className="vendor-details__left">
            <Link to="../../"><img src={back} className="vendor-details__icon" /></Link>
          </div>
          <div className="vendor-details__right">
            <h2 className="vendor-details__title">{currVendor.name}</h2>
            <p className="vendor-details__description">
              {currVendor.description}
            </p>
          </div>
        </div>
        <ItemList items={currVendor.items} cart={cart} setCart={setCart}/>
        <button className="vendor-details__checkout" onClick={clickHandler}><img src={cartImage} className="vendor-details__icon"/> Checkout <div>{cart.totalPrice !== 0 ? `$${cart.totalPrice}` : null}</div></button>
      </div>
    </div>
  );
}
