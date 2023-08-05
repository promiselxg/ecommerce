import { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import commerce from '../../lib/commerce';
import { useState } from 'react';

const Collections = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productLoading, setLoading] = useState(false);
  const currentUrl = useLocation();
  const url = currentUrl?.search.replace('?', '');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (url === '') {
        try {
          setLoading(true);
          const response = await commerce.products.list();
          setProducts(response);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        try {
          setLoading(true);
          const response = await commerce.products.list({
            category_slug: url,
          });
          setProducts(response);
          setLoading(false);
        } catch (error) {
          window.location = '/collections';
        }
      }
    };
    getData();
  }, [url]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const { data } = await commerce.categories.list();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);
  return (
    <>
      <div className="flex w-full bg-[white]">
        <div className="container mx-auto w-[80%] h-fit">
          <div className="text-sm breadcrumbs pt-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              {url !== '' && <li className="capitalize">{url}</li>}
            </ul>
          </div>
          <div className="w-full flex gap-2 py-10 md:py-14">
            <div className="hidden md:flex w-[20%] flex-col">
              <div className="pt-0 pb-5 flex justify-between items-center font-ProximaMedium text-[18px] uppercase cursor-pointer">
                <span>Categories</span>
                <span>
                  <FiPlus />
                </span>
              </div>
              <div className="text-[12px] font-ProximaMedium">
                <ul>
                  <li className="py-2">
                    <label className="cursor-pointer flex items-center gap-3 w-fit hover:underline">
                      <input
                        type="radio"
                        name="radio-1"
                        className="radio rounded-[1px]"
                        checked={url === '' || url === undefined}
                      />

                      <span className="label-text uppercase">
                        <Link to={`/collections`}>All</Link>
                      </span>
                    </label>
                  </li>
                  {categories &&
                    categories?.map((category) => (
                      <li className="py-2" key={category?.id}>
                        <label className="cursor-pointer flex items-center gap-3 w-fit hover:underline">
                          <input
                            type="radio"
                            name="radio-1"
                            checked={url === category?.slug}
                            className="radio rounded-[1px]"
                          />
                          <span className="label-text uppercase">
                            <Link to={`/collections?${category?.slug}`}>
                              {category?.name}
                            </Link>
                          </span>
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-[80%] bg-[white]">
              <div className="w-full flex">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                  {products?.meta?.pagination?.total === 0 ? (
                    <div className="h-[300px]">
                      <h1>No Product available in this category</h1>
                    </div>
                  ) : (
                    products?.data?.map((product) => (
                      <Link
                        to={`/collections/${product?.id}`}
                        key={product?.id}
                      >
                        <div className="pb-3">
                          <div className="w-full h-[320px] pb-2 relative">
                            <img
                              src={product?.assets[0]?.url}
                              alt={product?.name}
                              className="h-[320px] object-cover w-full"
                            />
                            <div className="md:hidden w-full bg-[rgba(0,0,0,0.5)] text-white p-3 absolute bottom-0 text-center hover:bg-[rgba(0,0,0,1)] cursor-pointer uppercase text-[13px] font-ProximaMedium font-[600]">
                              Add to cart
                            </div>
                          </div>
                          <div className="flex justify-between md:gap-3 pt-2 text-center md:text-left flex-col md:flex-row">
                            <span className="text-[14px] uppercase font-mono leading-tight">
                              <h1 className="text-[rgba(0,0,0,.8)] font-ProximaMedium text-[12px] font-[600]">
                                {product?.name}
                              </h1>
                            </span>
                            <span className="text-[12px] uppercase font-[600] font-Inter_400 text-[rgba(0,0,0,.8)]">
                              {product?.price?.formatted_with_symbol}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {productLoading && (
        <div className="flex w-full fixed h-screen bg-[rgba(0,0,0,0.6)] top-0 text-center text-[white] justify-center">
          <span className="loading loading-spinner w-[150px]"></span>
        </div>
      )}
    </>
  );
};

export default Collections;
