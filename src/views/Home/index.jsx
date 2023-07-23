import {
  FiClock,
  FiDollarSign,
  FiPocket,
  FiShoppingCart,
  FiStar,
} from 'react-icons/fi';
import { Hero } from '../../components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useContext, useEffect, useState } from 'react';
import commerce from '../../lib/commerce';
import { toast } from 'react-toastify';
import { AddToCartContext } from '../../context/AddToCartContext';
import { Skeleton } from 'antd';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [pid, setPid] = useState();
  const [fetchingProducts, setFetchingProducts] = useState(false);
  const { loading, dispatch } = useContext(AddToCartContext);

  const addToCart = async (id, qty, item) => {
    setPid(id);
    dispatch({ type: 'ADD_TO_CART_START' });
    try {
      const response = await commerce.cart.add(id, qty);
      dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: response.cart });
      toast(`${item} added to cart successfully`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      dispatch({ type: 'ADD_TO_CART_FAILED' });
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setFetchingProducts(true);
      try {
        const response = await commerce.products.list();
        setProducts(response.data);
        setFetchingProducts(false);
      } catch (error) {
        console.log('There was an error fetching the products', error);
        setFetchingProducts(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-full">
        <Hero />
        <div className="flex w-full bg-[whitesmoke] py-5">
          <div className="container w-[80%] mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="p-10  border-[#eee] border-b-[1px] md:border-b-0 md:border-r-[1px] text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiPocket />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.7)]">
                  We guarantee all items are authentic or we refund your money
                  back.
                </p>
              </div>
              <div className="p-10  border-[#eee] border-b-[1px] md:border-b-0 md:border-r-[1px] text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiDollarSign />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.7)]">
                  We offer the best price guarantee - domestic competitors.
                </p>
              </div>
              <div className="p-10  border-[#eee] border-b-[1px] md:border-b-0  md:border-r-[1px] text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiStar />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.7)]">
                  We strive for 5-Star Customer Service, we love to talk to our
                  customers.
                </p>
              </div>
              <div className="p-10 text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiClock />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.7)]">
                  We are able to offer our customers thousands of new products
                  daily.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex bg-[whitesmoke] flex-col pb-12">
          <div className="container w-[80%] mx-auto justify-center text-center ">
            <div className="max-w-[600px] flex justify-center text-center mx-auto">
              <p className="text-[12px] text-[rgba(0,0,0,0.7)] font-Inter_400">
                Have you been wondering how to look stylish, trendy and always
                selfie-ready without breaking the bank? if so, you are in the
                right place because we offer an incredible low prices on great
                variety of products: from dresses to handbags and shoes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="container mx-auto w-[80%] flex justify-center py-12 flex-col text-center">
            <h1 className="text-[30px] font-Bebas text-[rgba(0,0,0,0.7)]">
              Browse by Categories
            </h1>
            <div className="flex gap-3 justify-center pt-8">
              <button className="px-10 border py-2 rounded-[5px] hover:text-[#fc6539] font-Bebas">
                Shoes
              </button>
              <button className="px-10 border py-2 rounded-[5px] hover:text-[#fc6539] font-Bebas">
                Bags
              </button>
              <button className="px-10 border py-2 rounded-[5px] hover:text-[#fc6539] font-Bebas">
                Dress
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full pb-20 bg-white">
          <div className="container w-[90%] md:w-[80%] mx-auto">
            {fetchingProducts ? (
              <Skeleton active={fetchingProducts} />
            ) : (
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter="20px">
                  {products.map((product, i) => (
                    <div
                      key={i}
                      className="bg-white  rounded-[10px] shadow-2xl overflow-hidden"
                    >
                      <img
                        src={product?.image?.url}
                        className="w-full cursor-pointer"
                      />

                      <div className="p-5">
                        <div className="flex flex-col pb-2">
                          <h1 className="text-[24px] font-Poppins_400 text-[rgba(0,0,0,0.7)]">
                            {product.name}
                          </h1>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                            className="text-[12px] text-[rgba(0,0,0,0.6)] pb-2"
                          />
                          <h1 className="text-[28px] font-Bebas">
                            {product.price.formatted_with_symbol}
                          </h1>
                        </div>
                        <div className="flex gap-5 pb-3 md:pb-0 ">
                          {product.is.sold_out ? (
                            <div className="flex items-center px-5 py-2 bg-transparent rounded  shadow gap-2  hover:text-[#fc6539] cursor-not-allowed">
                              SOLD OUT
                            </div>
                          ) : (
                            <a
                              href={product.checkout_url.checkout}
                              className={`${loading && 'pointer-events-none'}`}
                            >
                              <div className="flex items-center px-5 py-2 bg-transparent rounded cursor-pointer shadow gap-2  hover:text-[#fc6539]">
                                <FiDollarSign /> Buy Now
                              </div>
                            </a>
                          )}
                          {!product.is.sold_out && (
                            <button
                              className="flex items-center px-5 py-2  bg-[#fc6539] rounded cursor-pointer shadow gap-2 hover:text-white disabled:cursor-not-allowed disabled:bg-[gray]"
                              onClick={() =>
                                addToCart(
                                  `${product?.id}`,
                                  1,
                                  `${product.name}`
                                )
                              }
                              disabled={loading}
                            >
                              {loading && product.id === pid ? (
                                <span className="loading loading-spinner loading-xs"></span>
                              ) : (
                                <>
                                  <FiShoppingCart /> Add to cart
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
