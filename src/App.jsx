import { Route, Routes } from 'react-router-dom';
import {
  Cart,
  Checkout,
  ContactUs,
  Home,
  Layout,
  // PrivacyPolicy,
  Product,
  Returns,
  SizeGuide,
  Terms,
} from './views';
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
          <Route path="/pages/size-guide" element={<SizeGuide />} />
          <Route path="/pages/return" element={<Returns />} />
          <Route path="/pages/terms" element={<Terms />} />
          <Route path="/pages/contact-us" element={<ContactUs />} />
          {/* <Route path="/pages/privacy" element={<PrivacyPolicy />} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
