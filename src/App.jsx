import { Route, Routes } from 'react-router-dom';
import { Cart, Checkout, Home, Layout, Product } from './views';
import Collections from './views/Collections';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:product_id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
