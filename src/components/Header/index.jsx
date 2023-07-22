import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { AddToCartContext } from '../../context/AddToCartContext';
import { useContext } from 'react';

const Header = () => {
  const { cart } = useContext(AddToCartContext);

  return (
    <>
      <div className="w-full h-[80px] flex items-center ">
        <div className="container mx-auto w-[90%] md:w-[80%]">
          <div className="flex justify-between items-center py-10">
            <div className="left">
              <Link to="/">
                {/* <img
                  src="https://sinp-demo.myshopify.com/cdn/shop/files/Sinp-logo_125x.png?v=1620456168"
                  alt="alt"
                  className="h-[40px]"
                /> */}
                Logo
              </Link>
            </div>
            <div className="flex items-center gap-5 mr-3 md:gap-8">
              {/* <Link
                to="/"
                className="text-[16px] md:text-[14px] font-Poppins_600"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-[16px] md:text-[14px] font-Poppins_600"
              >
                Products
              </Link> */}
              <Link
                to="/cart"
                className="text-[20px] font-Poppins_600 flex items-center gap-2"
              >
                <FiShoppingCart /> ({cart ? cart.total_unique_items : 0})
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
