import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import VendorDetails from '../Components/VendorDetails/VendorDetails';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function VendorPage({cart, setCart}) {

  let [currVendor, setCurrVendor] = useState({})
  let {vendorId} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/vendors/${vendorId}`).then( (r) => {
      setCurrVendor(r.data[0])
    }).catch(e => {console.log(e)})
  }, [])

    return (
        <div className="App">
          <Header />
          <VendorDetails currVendor={currVendor} cart={cart} setCart={setCart}/>
          <Footer />
        </div>
      );
}