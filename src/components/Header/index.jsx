import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { AddToCartContext } from '../../context/AddToCartContext';
import { useContext } from 'react';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  const { cart } = useContext(AddToCartContext);

  return (
    <>
      <div className="w-full h-[60px] flex items-center shadow bg-[rgba(255,255,255,.9)] border-b-[1px] border-b-[rgb(221,221,221)]">
        <div className="container mx-auto w-full md:w-[80%]">
          <div className="flex justify-between items-center">
            <div className="left">
              <Link to="/">
                <img src={Logo} alt="alt" className="h-[70px]" />
              </Link>
            </div>
            <div className="flex items-center gap-5 mr-3 md:gap-8">
              <Link to="/" className="text-[12px] md:text-[12px] text-black ">
                Home
              </Link>
              <Link
                to="/collections"
                className="text-[12px] md:text-[12px] text-black "
              >
                Collections
              </Link>
              <Link
                to="/cart"
                className="text-[20px] font-Poppins_600 text-black flex items-center gap-2"
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
