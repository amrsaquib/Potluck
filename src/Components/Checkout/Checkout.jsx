import axios from "axios";
import back from "../../Assets/back-icon.svg";
import cartIcon from "../../Assets/cart-icon.svg";
import "./Checkout.scss";
import { Link , useNavigate, useParams} from "react-router-dom";

export default function Checkout({cart}) {
  let {vendorId} = useParams()
  let navigate = useNavigate()
  let itemList = []
    for(const item in cart.items) {
      itemList.push( <div className="checkout__item">
                <p>{`${cart.items[item][0]}x`}</p> <p>{`${item}`}</p> <p>${cart.items[item][1]}</p>
            </div>)
    }
  
  let clickHandler = () => {
    let finalCart = {...cart}
    finalCart.time = Date.now()
    axios.post(`http://localhost:8080/vendors/${vendorId}/checkout`, finalCart).then(() => {
      navigate('/')
    })
  }
  return (
    <div className="checkout">
      <div className="checkout__card">
        <div className="checkout__header">
          <div className="checkout__left">
            <Link to={`/vendor/${vendorId}`}><img src={back} className="checkout__icon" /></Link>
          </div>
          <div className="checkout__right">
            <h2 className="checkout__title">Checkout</h2>
          </div>
        </div>
        <div className="checkout__body">
          <div className="checkout__items">
            {itemList}
          </div>
          <div className="checkout__total"><p>Total:</p> <div></div> <p>${cart.totalPrice}</p></div>
        </div>
        <button className="checkout__checkout" onClick={clickHandler}>
          <img src={cartIcon} className="checkout__icon" /> Complete Checkout <div></div>
        </button>
      </div>
    </div>
  );
}
