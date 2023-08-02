import { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MyKitchen from '../Components/MyKitchen/MyKitchen';
import axios from 'axios';

export default function MyKitchenPage() {
  const kitchen_id = "64c963c258cb83315445ca0c"
  const [userKitchen, setUserKitchen] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8080/vendors/${kitchen_id}`).then( (r) => {
      setUserKitchen(r.data[0])
    }).catch(e => {console.log(e)})
  }, [])

  


    return (
        <div className="App">
          <Header />
          <MyKitchen userKitchen={userKitchen} kitchen_id={kitchen_id}/>
          <Footer />
        </div>
      );
}