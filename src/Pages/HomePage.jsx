import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import VendorsList from "../Components/VendorsList/VendorsList";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage({setCart}) {
  let [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/vendors").then((r) => {
      setVendors(r.data)
    }).catch(e => {console.log(e)});
    setCart({items: {}, totalQuantity: 0, totalPrice: 0})
  }, []);

  return (
    <div className="App">
      <Header />
      <VendorsList vendors={vendors}/>
      <Footer />
    </div>
  );
}
