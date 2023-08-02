import plus from "../../Assets/plus-icon.svg";
import editIcon from '../../Assets/edit-icon.svg'
import Item from "../Item/Item";
import Itemv2 from "../Itemv2/Itemv2";
import "./MyKitchen.scss";
import axios from "axios";

export default function MyKitchen({userKitchen, kitchen_id}) {

  let itemList = undefined
    if(userKitchen.items) {
        itemList = userKitchen.items.map((item) => {
            return <Itemv2 item={item}/>
        })
    }

    let submitHandlerEdit = (e) => {
      e.preventDefault()
      let newUserKitchen = {...userKitchen}
      newUserKitchen.name = e.target.name.value
      newUserKitchen.description = e.target.description.value

      axios.put(`http://localhost:8080/vendors/${kitchen_id}`, newUserKitchen).catch(e => {console.log(e)})

    }

    let submitHandlerAdd = (e) => {
      e.preventDefault()
      let newItem = {}
      newItem.name = e.target.name.value
      newItem.description = e.target.description.value
      newItem.price = e.target.price.value

      axios.post(`http://localhost:8080/vendors/${kitchen_id}/item`, newItem).catch(e => {console.log(e)})
    }
  
  return (
    <div className="my-kitchen">
      <div className="my-kitchen__card">
        <form className="my-kitchen__header" onSubmit={submitHandlerEdit}>
            <h2 className="my-kitchen__title">My Kitchen</h2>
            <label className="my-kitchen__input-container">Kitchen Name: <input type="text" className="my-kitchen__input" name="name" defaultValue={userKitchen.name}></input></label>
            <label className="my-kitchen__input-container">Kitchen Description: <input type="text" className="my-kitchen__input my-kitchen__input--description" name="description" defaultValue={userKitchen.description}></input></label>
            <button className="my-kitchen__button"><img src={editIcon} className="my-kitchen__icon" type='submit'></img> Edit Kitchen <div></div></button>
        </form>
        <form className="my-kitchen__add-item" onSubmit={submitHandlerAdd}>
            <h3 className="my-kitchen__title">Add Item</h3> 
            <label className="my-kitchen__input-container">Item Name: <input type="text" className="my-kitchen__input" name="name"></input></label>
            <label className="my-kitchen__input-container">Item Price: <input type="number" className="my-kitchen__input" name="price"></input></label>
            <label className="my-kitchen__input-container">Item Description: <input type="text" className="my-kitchen__input my-kitchen__input--description" name="description"></input></label>
            <button className="my-kitchen__button" type="submit"><img src={plus} className="my-kitchen__icon"></img> Add Item <div></div></button>
        </form>
        <div className="my-kitchen__items">
        <h3 className="my-kitchen__title">My Items</h3> 
        <div className="my-kitchen__item-list">
          {itemList}
        </div>
        </div>
      </div>
    </div>
  );
}
