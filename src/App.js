import './App.scss';
import Header from './Components/Header/Header';
import Vendor from './Components/Vendor/Vendor';
import VendorsList from './Components/VendorsList/VendorsList';

function App() {
  return (
    <div className="App">
      <Header />
      <VendorsList />
    </div>
  );
}

export default App;
