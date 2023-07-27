import back from "../../Assets/back-icon.svg";
import cart from "../../Assets/cart-icon.svg";
import "./Checkout.scss";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__card">
        <div className="checkout__header">
          <div className="checkout__left">
            <img src={back} className="checkout__icon" />
          </div>
          <div className="checkout__right">
            <h2 className="checkout__title">Checkout</h2>
          </div>
        </div>
        <div className="checkout__body">
          <div className="checkout__items">
            <div className="checkout__item">
                <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
            <div className="checkout__item">
              <p>1x</p> <p>Chicken Sandwich</p> <p>9.99</p>
            </div>
          </div>
          <div className="checkout__total"><p>Total:</p> <div></div> <p>$119.99</p></div>
        </div>
        <button className="checkout__checkout">
          <img src={cart} className="checkout__icon" /> Complete Checkout <div></div>
        </button>
      </div>
    </div>
  );
}
