import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Topbar from './component/topbar/Topbar';
import Feed from './pages/Home/Feed';
import { ProductContextProvider } from './db/ProductContext';
import About from './pages/About';
import ProductDetails from './pages/Products/ProductDetails';
import Cart from './component/Cart/Cart';
import SearchResults from './component/SearchResults/SearchResults';
import { ApiDataProvider } from './db/ApiDataContext';
import TestPage from './component/TestPage';
import Products from './pages/Products/Shared';


function App() {
  return (
    <div>
    <ProductContextProvider>
      <ApiDataProvider>
    <HashRouter>
      <Topbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:title' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/result' element={<SearchResults />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </HashRouter>
    </ApiDataProvider>
    </ProductContextProvider>
    </div>
  );
}

export default App;
