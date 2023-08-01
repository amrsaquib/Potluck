import plus from "../../Assets/plus-icon.svg";
import Item from "../Item/Item";
import Itemv2 from "../Itemv2/Itemv2";
import "./MyKitchen.scss";

export default function MyKitchen() {
  return (
    <div className="my-kitchen">
      <div className="my-kitchen__card">
        <div className="my-kitchen__header">
            <h2 className="my-kitchen__title">My Kitchen</h2>
            <label className="my-kitchen__input-container">Kitchen Name: <input type="text" className="my-kitchen__input"></input></label>
            <label className="my-kitchen__input-container">Kitchen Description: <input type="text" className="my-kitchen__input my-kitchen__input--description"></input></label>
        </div>
        <div className="my-kitchen__add-item">
            <h3 className="my-kitchen__title">Add Item</h3> 
            <label className="my-kitchen__input-container">Item Name: <input type="text" className="my-kitchen__input"></input></label>
            <label className="my-kitchen__input-container">Item Price: <input type="number" className="my-kitchen__input"></input></label>
            <label className="my-kitchen__input-container">Item Description: <input type="text" className="my-kitchen__input my-kitchen__input--description"></input></label>
            <button className="my-kitchen__button"><img src={plus} className="my-kitchen__icon"></img> Add Item <div></div></button>
        </div>
        <div className="my-kitchen__items">
        <h3 className="my-kitchen__title">My Items</h3> 
        <div className="my-kitchen__item-list">
        <Itemv2 />
            <Itemv2 />
            <Itemv2 />
            <Itemv2 />
            <Itemv2 />
            <Itemv2 />
            <Itemv2 />
        </div>
        </div>
      </div>
    </div>
  );
}
