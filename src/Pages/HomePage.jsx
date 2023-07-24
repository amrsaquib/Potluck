import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import VendorsList from '../Components/VendorsList/VendorsList';

export default function HomePage() {
    return (
        <div className="App">
          <Header />
          <VendorsList />
          <Footer />
        </div>
      );
}