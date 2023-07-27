import back from "../../Assets/back-icon.svg";
import cart from '../../Assets/cart-icon.svg'
import ItemList from "../ItemList/ItemList";
import "./VendorDetails.scss";

export default function VendorDetails() {
  return (
    <div className="vendor-details">
      <div className="vendor-details__card">
        <div className="vendor-details__header">
          <div className="vendor-details__left">
            <img src={back} className="vendor-details__icon" />
          </div>
          <div className="vendor-details__right">
            <h2 className="vendor-details__title">Amr's Kitchen</h2>
            <p className="vendor-details__description">
              Serving you the best food in the GTA. No one compares to me.
              Everyone else sucks. Eat here!
            </p>
          </div>
        </div>
        <ItemList />
        <button className="vendor-details__checkout"><img src={cart} className="vendor-details__icon"/> Checkout <div></div></button>
      </div>
    </div>
  );
}
