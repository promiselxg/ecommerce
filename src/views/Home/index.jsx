import { FiDollarSign, FiShoppingCart } from 'react-icons/fi';
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
        <div className="flex w-full min-h-screen py-20 bg-[whitesmoke]">
          <div className="container w-[90%] md:w-[80%] mx-auto">
            <div className="flex justify-center pb-8">
              <h1 className="text-[50px] font-Bebas">Latest Arrivals</h1>
            </div>
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
                          <h1 className="text-sm font-Poppins_400">
                            {product.name}
                          </h1>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                            className="text-[12px]"
                          />
                          <h1 className="text-[28px] font-Bebas">
                            {product.price.formatted_with_symbol}
                          </h1>
                        </div>
                        <div className="flex gap-5 pb-3 md:pb-0 ">
                          {product.is.sold_out ? (
                            <div className="flex items-center px-5 py-2 bg-transparent  to-blue-500 rounded  shadow gap-2 hover:bg-[#fc6539] hover:text-white cursor-not-allowed">
                              SOLD OUT
                            </div>
                          ) : (
                            <a
                              href={product.checkout_url.checkout}
                              className={`${loading && 'pointer-events-none'}`}
                            >
                              <div className="flex items-center px-5 py-2 bg-transparent  to-blue-500 rounded cursor-pointer shadow gap-2 hover:bg-[#fc6539] hover:text-white">
                                <FiDollarSign /> Buy Now
                              </div>
                            </a>
                          )}
                          {!product.is.sold_out && (
                            <button
                              className="flex items-center px-5 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500  rounded cursor-pointer shadow gap-2 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:bg-[gray]"
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
