import Topbar from './Components/Topbar';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductSlides from './Components/ProductSlides';
import Product from './Components/Product';

function App() {
  return (
    <div>
      <Topbar/>
      <ProductSlides/>
      <Product/>
    </div>
  );
}

export default App;
