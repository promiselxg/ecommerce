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
import { Link } from 'react-router-dom';

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
      <div className="w-full bg-[white]">
        <Hero />
        <div className="flex w-full bg-[white] py-5">
          <div className="container w-[80%] mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="p-10  border-[#eee] border-b-[1px] md:border-b-0 md:border-r-[1px] text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiPocket />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.9)] font-ProximaMedium">
                  We guarantee all items are authentic or we refund your money
                  back.
                </p>
              </div>
              <div className="p-10  border-[#eee] border-b-[1px] md:border-b-0 md:border-r-[1px] text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiDollarSign />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.9)] font-ProximaMedium">
                  We offer the best price guarantee, domestic competitors.
                </p>
              </div>
              <div className="p-10  border-[#eee] border-b-[1px] md:border-b-0  md:border-r-[1px] text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiStar />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.9)] font-ProximaMedium">
                  We strive for 5 Star Customer Service, we love to talk to our
                  customers.
                </p>
              </div>
              <div className="p-10 text-center w-full flex flex-col justify-center">
                <span className="flex justify-center text-center text-[20px] pb-1">
                  <FiClock />
                </span>
                <p className="text-[14px] text-[rgba(0,0,0,0.9)] font-ProximaMedium">
                  We are able to offer our customers thousands of new products
                  daily.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex bg-[whitesmoke] flex-col pb-12">
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
        </div> */}
        <div className="flex w-full bg-[whitesmoke]">
          <div className="container mx-auto w-[80%] justify-center text-[#000] text-center py-8">
            <h1 className="text-[35px] font-Bebas py-5 text-[#000]">
              Why shop from us?
            </h1>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/RETURNS_100x.svg?v=1685570154"
                  alt="easy returns"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[12px] md:text-[15px] uppercase font-ProximaMedium">
                  Easy Returns and Instant refunds
                </span>
              </div>
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/GWP_VIP_DELIEVERED_100x.svg?v=1685570204"
                  alt="enjoy a complementary gift with purchase"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[12px] md:text-[15px] uppercase font-ProximaMedium">
                  Enjoy a complementary gift with purchase
                </span>
              </div>
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/REVIEWS_2_100x.svg?v=1685570233"
                  alt="over 35,000 customer reviews"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[12px] md:text-[15px] uppercase font-ProximaMedium">
                  Over 35,000 customer reviews
                </span>
              </div>
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/DRESSING_ROOM_1_100x.svg?v=1685570280"
                  alt="extended sizes"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[12px] md:text-[15px] uppercase font-ProximaMedium">
                  extended sizes and expanding...
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full bg-[white]">
          <div className="container mx-auto w-[80%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5 py-5 md:py-10">
              <div className="cursor-pointer flex flex-col text-center">
                <img
                  src="https://www.hellomolly.com/cdn/shop/products/a03i2280_1800x1800.jpg"
                  alt=""
                  className="h-[330px] object-cover w-full pb-2"
                />
                <span className="border-[1px] border-[rgba(0,0,0,0.5)] p-3 w-full font-ProximaMedium uppercase hover:bg-black hover:text-white">
                  <Link to="/" className="text-black">
                    Shop swim
                  </Link>
                </span>
              </div>
              <div className="cursor-pointer flex flex-col text-center">
                <img
                  src="https://www.hellomolly.com/cdn/shop/products/a03i6920_9176bdc2-13b6-4c42-8474-af184082b505_1800x1800.jpg"
                  alt=""
                  className="h-[330px] object-cover w-full pb-2"
                />
                <span className="border-[1px] border-[rgba(0,0,0,0.5)] p-3 w-full font-ProximaMedium uppercase hover:bg-black hover:text-white">
                  <Link to="/" className="text-black">
                    Shop Swim tops
                  </Link>
                </span>
              </div>
              <div className="cursor-pointer flex flex-col text-center">
                <img
                  src="https://www.hellomolly.com/cdn/shop/files/US_CategoryBanner_3_26de3309-930c-4e62-bb00-b99ff05879e0_1080x.jpg?v=1690327620"
                  alt=""
                  className="h-[330px] object-cover w-full pb-2"
                />
                <span className="border-[1px] border-[rgba(0,0,0,0.5)] p-3 w-full font-ProximaMedium uppercase hover:bg-black hover:text-white">
                  <Link to="/" className="text-black">
                    Shop swim bottoms
                  </Link>
                </span>
              </div>
              <div className="cursor-pointer flex flex-col text-center">
                <img
                  src="https://www.hellomolly.com/cdn/shop/files/US_CategoryBanner_4_3edece7b-a5c5-4387-b519-c4178b848a37_1080x.jpg?v=1690327621"
                  alt=""
                  className="h-[330px] object-cover w-full pb-2"
                />
                <span className="border-[1px] border-[rgba(0,0,0,0.5)] p-3 w-full font-ProximaMedium uppercase hover:bg-black hover:text-white">
                  <Link to="/" className="text-black">
                    Shop one pieces
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="container mx-auto w-[80%] flex justify-center flex-col text-center">
            <div className="divider pb-10">TOP SELLERS</div>
          </div>
        </div>
        <div className="flex w-full pb-20 bg-white">
          <div className="container w-[90%] md:w-[80%] mx-auto">
            {fetchingProducts ? (
              <Skeleton active={fetchingProducts} />
            ) : (
              <ResponsiveMasonry>
                <Masonry columnsCount={3} gutter="20px">
                  {products?.map((product, i) => (
                    <div
                      key={i}
                      className="bg-white  rounded-[10px] border-[1px] border-[rgba(0,0,0,0.1)] overflow-hidden"
                    >
                      <Link to={`/collections/${product?.id}`}>
                        <img
                          src={product?.image?.url}
                          className="w-full cursor-pointer"
                        />

                        <div className="p-5">
                          <div className="flex flex-col pb-2">
                            <h1 className="text-[24px] font-ProximaMedium text-[rgba(0,0,0,0.9)]">
                              {product?.name}
                            </h1>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: product?.description,
                              }}
                              className="text-[12px] font-ProximaMedium text-[rgba(0,0,0,0.6)] pb-2"
                            />
                            <h1 className="text-[28px] font-Bebas text-black">
                              {product?.price?.formatted_with_symbol}
                            </h1>
                          </div>
                        </div>
                      </Link>
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
