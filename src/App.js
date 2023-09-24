import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Topbar from './component/topbar/Topbar';
import Feed from './component/feed/Feed';
import { ProductContextProvider } from './component/feed/shop/db/ProductContext';
import About from './component/pages/About';
import Shared from './component/feed/shop/Shared';
import ProductDetails from './component/feed/shop/ProductDetails';
import Cart from './component/Cart/Cart';
import SearchResults from './component/SearchResults/SearchResults';
import { ApiDataProvider } from './component/feed/shop/db/ApiDataContext';
import TestPage from './component/TestPage';



function App() {
  return (
    <div>
    <ProductContextProvider>
      <ApiDataProvider>
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Shared />} />
        <Route path='/products/:title' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/result' element={<SearchResults />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </Router>
    </ApiDataProvider>
    </ProductContextProvider>
    </div>
  );
}

export default App;
