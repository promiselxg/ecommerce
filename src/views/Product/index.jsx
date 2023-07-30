import { useContext, useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link, useParams } from 'react-router-dom';
import commerce from '../../lib/commerce';
import { AddToCartContext } from '../../context/AddToCartContext';
import { toast } from 'react-toastify';

const Product = () => {
  const { product_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const { loading: isLoading, dispatch } = useContext(AddToCartContext);
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        setLoading(true);
        let newImages = [];
        const product = await commerce.products.retrieve(`${product_id}`);
        setProduct(product);
        product?.assets.forEach((item) => {
          newImages.push({
            original: item.url,
            thumbnail: item.url,
          });
        });
        setProductImages(newImages);
        setLoading(false);
      } catch (error) {
        // window.location = '/collections';
        console.log(error);
        setLoading(false);
      }
    };
    getProductInfo();
  }, [product_id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const addToCart = async (id, qty, item) => {
    dispatch({ type: 'ADD_TO_CART_START' });
    try {
      const response = await commerce.cart.add(id, qty);
      console.log(response);

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

  return (
    <>
      <div className="flex w-full bg-[white] pb-10">
        <div className="container w-[80%] mx-auto">
          <div className="text-sm breadcrumbs py-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>{product?.name}</li>
            </ul>
            <h1 className="hidden md:flex text-[30px] font-ProximaMedium md:pt-3 ">
              {product?.name}
            </h1>
          </div>
          <div className="w-full flex gap-3 relative flex-col md:flex-row">
            {!loading && productImages && (
              <div className="w-[full] md:w-1/2">
                <ImageGallery
                  items={productImages}
                  lazyLoad
                  thumbnailPosition="left"
                  showFullscreenButton={false}
                  showPlayButton={false}
                />
              </div>
            )}
            <div className="w-full md:w-1/2 sticky top-0">
              <div className="flex justify-center flex-col text-center">
                <div className="p-5 md:p-10">
                  <h1 className="text-[rgba(0,0,0,0.9)] font-ProximaMedium font-[600] md:text-[26px] uppercase">
                    {product?.name}
                  </h1>
                  <p className="pt-5 font-Poppins_600 md:text-[20px] text-[rgba(0,0,0,0.9)] ">
                    {product?.price?.formatted_with_symbol}
                  </p>
                </div>
                <div className="w-full justify-center flex text-center mx-auto">
                  <div className="grid grid-cols-5 gap-3 text-center place-content-center place-items-center">
                    {product?.variant_groups?.map((option) => {
                      return option.options.map((item) => (
                        <div
                          className="p-3 md:p-4 border border-[rgba(0,0,0,0.7)] text-[rgba(0,0,0,0.9)] text-center w-fit cursor-pointer rounded-[3px] transition ease-in-out delay-0 bg-white  hover:bg-black duration-300 hover:text-white text-[12px] uppercase"
                          key={item.id}
                        >
                          {item?.name}
                        </div>
                      ));
                    })}
                  </div>
                </div>
                <div className="flex gap-3 justify-center py-8">
                  {product?.is?.sold_out ? (
                    <button className="btn px-5 w-[80%] bg-black rounded-[20px] text-white border border-[rgba(0,0,0,0.8)] hover:bg-[#ffd8c8e0] hover:text-black cursor-not-allowed">
                      Sold out
                    </button>
                  ) : (
                    <button
                      className="btn px-5 w-[80%] bg-black rounded-[20px] text-white border border-[rgba(0,0,0,0.8)] hover:bg-[#ffd8c8e0] hover:text-black"
                      onClick={() =>
                        addToCart(`${product?.id}`, 1, `${product?.name}`)
                      }
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <span className="loading loading-spinner loading-xs"></span>
                          <span>Please wait...</span>
                        </div>
                      ) : (
                        'Add to Cart'
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div className="flex w-[88%] mx-auto flex-col">
                <div tabIndex={0} className="collapse collapse-plus">
                  <div className="collapse-title text-[14px] font-Inter_400 uppercase">
                    details
                  </div>
                  <div className="collapse-content">
                    <p
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </div>
                </div>
                <div className="divider m-0 h-0"></div>
                <div tabIndex={1} className="collapse collapse-plus">
                  <div className="collapse-title text-[14px] font-Inter_400 uppercase">
                    delivery and returns
                  </div>
                  <div className="collapse-content">
                    <p className="text-[12px] text-[rgba(0,0,0,0.8)]">
                      We offer FREE standard shipping USA-wide on all orders
                      over $100. Expect delivery within 6 business days. We also
                      offer express Next Day and 2-Day services within the USA.
                      We accept returns for store credit within 30 days of order
                      delivery for full priced items only.
                    </p>
                  </div>
                </div>
                <div className="divider m-0 h-0"></div>
                <div tabIndex={2} className="collapse collapse-plus">
                  <div className="collapse-title text-[14px] font-Inter_400 uppercase">
                    size chart
                  </div>
                  <div className="collapse-content">
                    <div className="table ">
                      <table
                        width="100%"
                        cellSpacing="0"
                        cellPadding="0"
                        className="border"
                      >
                        <thead>
                          <tr>
                            <th>SIZE</th>
                            <th>AU</th>
                            <th>US</th>
                            <th>UK</th>
                            <th>EUR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>XS</td>
                            <td>6</td>
                            <td>2</td>
                            <td>6</td>
                            <td>34</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>8</td>
                            <td>4</td>
                            <td>8</td>
                            <td>36</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>10</td>
                            <td>6</td>
                            <td>10</td>
                            <td>38</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>12</td>
                            <td>8</td>
                            <td>12</td>
                            <td>40</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>14</td>
                            <td>10</td>
                            <td>14</td>
                            <td>42</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
