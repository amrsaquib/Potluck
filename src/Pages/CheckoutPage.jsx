import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Checkout from '../Components/Checkout/Checkout';

export default function CheckoutPage({cart}) {
    return (
        <div className="App">
          <Header />
          <Checkout cart={cart}/>
          <Footer />
        </div>
      );
}