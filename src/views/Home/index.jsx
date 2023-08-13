import {
  FiClock,
  FiDollarSign,
  FiPocket,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";
import { Hero } from "../../components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useContext, useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import { toast } from "react-toastify";
import { AddToCartContext } from "../../context/AddToCartContext";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [pid, setPid] = useState();
  const [fetchingProducts, setFetchingProducts] = useState(false);
  const { loading, dispatch } = useContext(AddToCartContext);
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);

  const addToCart = async (id, qty, item) => {
    setPid(id);
    dispatch({ type: "ADD_TO_CART_START" });
    try {
      const response = await commerce.cart.add(id, qty);
      dispatch({ type: "ADD_TO_CART_SUCCESS", payload: response.cart });
      toast(`${item} added to cart successfully`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      dispatch({ type: "ADD_TO_CART_FAILED" });
      console.log(error);
    }
  };

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setFetchingProducts(true);
      try {
        const response = await commerce.products.list();
        setProducts(response.data);
        setFetchingProducts(false);
      } catch (error) {
        console.log("There was an error fetching the products", error);
        setFetchingProducts(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const getAllCategories = async () => {
      setCategoryLoading(true);
      try {
        const response = await commerce.categories.list();
        setCategories(response?.data?.slice(0, 4));
        setCategoryLoading(false);
      } catch (error) {
        console.log(error);
        setCategoryLoading(false);
      }
    };
    getAllCategories();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DRF SHOPS | Fashion For Women | Official Online Store</title>
        <meta
          name="description"
          content="drfstors is your go-to destination for the hottest styles and trends. Shop the latest range of dresses, playsuits, skirts, accessories and more. Our new arrivals means you'll be looking on point for every occasion."
        />
      </Helmet>
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
                <span className="py-3 text-[11px] md:text-[15px] uppercase font-ProximaMedium">
                  Easy Returns and Instant refunds
                </span>
              </div>
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/GWP_VIP_DELIEVERED_100x.svg?v=1685570204"
                  alt="enjoy a complementary gift with purchase"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[11px] md:text-[15px] uppercase font-ProximaMedium">
                  Enjoy a complementary gift with purchase
                </span>
              </div>
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/REVIEWS_2_100x.svg?v=1685570233"
                  alt="over 35,000 customer reviews"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[11px] md:text-[15px] uppercase">
                  24/7 Customer Support
                </span>
              </div>
              <div className=" h-fit flex flex-col py-2 md:py-5 text-center">
                <img
                  src="https://www.beginningboutique.com/cdn/shop/files/DRESSING_ROOM_1_100x.svg?v=1685570280"
                  alt="extended sizes"
                  className="h-[50px] md:h-[100px]"
                />
                <span className="py-3 text-[11px] md:text-[15px] uppercase font-ProximaMedium">
                  extended sizes and expanding...
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="container mx-auto w-[80%] flex justify-center flex-col text-center">
            <div className="divider pt-10">TOP CATEGORIES</div>
          </div>
        </div>
        <div className="flex w-full bg-[white]">
          <div className="container mx-auto w-[80%]">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 py-5 md:py-10">
              {categoryLoading ? (
                <Skeleton active={categoryLoading} />
              ) : (
                categories?.map((category) => (
                  <div
                    className="cursor-pointer flex flex-col text-center"
                    key={category.id}
                  >
                    <img
                      src={category?.assets[0]?.url}
                      alt=""
                      className="h-[200px] object-cover w-full pb-2"
                    />
                    <Link
                      to={`/collections?${category?.slug}`}
                      className="border-[1px] border-[rgba(0,0,0,0.5)] p-3 w-full uppercase hover:bg-black text-black hover:text-white text-[11px] md:text-[14px]"
                    >
                      Shop {category?.name}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="container mx-auto w-[80%] flex justify-center flex-col text-center">
            <div className="divider pb-10">TOP SELLERS</div>
          </div>
        </div>

        <div className="flex w-full bg-[white]">
          <div className="container mx-auto w-[80%]">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 py-5 md:py-10">
              {categoryLoading ? (
                <Skeleton active={categoryLoading} />
              ) : (
                products?.map((product) => (
                  <Link key={product.id} to={`/collections/${product?.id}`}>
                    <div className="cursor-pointer flex flex-col text-center shadow-lg border-[1px] border-[rgba(0,0,0,0.1)]  w-full  uppercase text-black hover:text-black text-[12px] md:text-[14px] rounded-[10px] overflow-hidden hover:shadow-sm">
                      <img
                        src={product?.image?.url}
                        alt=""
                        className="h-[200px] object-cover w-full"
                      />
                      <p className="py-2 px-2 text-left">
                        {product?.name.substring(0, 30)}
                      </p>
                      <h1 className="text-[20px] font-Bebas text-black text-left px-2 pb-3">
                        {product?.price?.formatted_with_symbol}
                      </h1>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
