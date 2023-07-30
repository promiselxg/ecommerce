import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { AddToCartContext } from '../../context/AddToCartContext';
import { useContext, useState } from 'react';
import commerce from '../../lib/commerce';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart } = useContext(AddToCartContext);
  const [removing, setRemoving] = useState(false);
  const [updating, setUpdating] = useState(false);

  const removeItem = async (id) => {
    try {
      setRemoving(true);
      document.getElementById(id).style.display = 'none';
      await commerce.cart.remove(id);
      localStorage.setItem(
        'cart',
        JSON.stringify(await commerce.cart.retrieve())
      );
      window.location.reload();
      toast(`removed successfully`);
    } catch (error) {
      console.log(error);
      setRemoving(false);
    }
  };
  const updateQty = async (productId, qty) => {
    setUpdating(true);
    const { cart } = await commerce.cart.update(productId, { quantity: qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  };
  console.log(cart);
  return (
    <div className="bg-[#f6f6f6]">
      <div className="flex  w-full bg-[#f6f6f6] text-[#1f2226]">
        <div className="container mx-auto w-[80%] py-10">
          <div className="text-[18px] breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>YOUR SHOPPING CART</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full pb-20 flex-col ">
        {cart?.total_items === 0 || cart === null ? (
          <div className="container mx-auto w-[80%] bg-[white] justify-center items-center shadow rounded py-10">
            <div className="flex flex-col  justify-center text-center">
              <div className="justify-center flex">
                <CiShoppingCart className="text-[100px]" />
              </div>
              <div className="bottom">
                <h1 className="text-[20px] font-Poppins_600">
                  Your cart is empty!
                </h1>
                <p className="text-[12px] font-Poppins_400">
                  Browse our products and discover our best deals!
                </p>
                <div className="py-5">
                  <Link to="/collections">
                    <div className="btn shadow bg-transparent">
                      Start Shopping
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto w-[80%]">
            <div className="overflow-x-auto">
              <table className="table border  bg-[white]">
                {/* head */}
                <thead>
                  <tr className="border border-[#ccc]">
                    <th className="border border-[#ccc]">Product Image</th>
                    <th className="border border-[#ccc] text-center">
                      Product
                    </th>
                    <th className="border border-[#ccc] text-center">Price</th>
                    <th className="border border-[#ccc]">Quantity</th>
                    <th className="border border-[#ccc] text-center"> Total</th>
                    <th className="border border-[#ccc] text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.line_items?.map((item) => (
                    <tr
                      className="border border-[#ccc]"
                      key={item.id}
                      id={item.id}
                    >
                      <th className="border border-[#ccc] w-[10%]">
                        <img
                          src={item.image.url}
                          alt={item.name}
                          className="w-[80px] h-[80px] bg-contain"
                        />
                      </th>
                      <td className="border border-[#ccc] text-center font-Poppins_400">
                        <Link to="/">{item.name}</Link>
                      </td>
                      <td className="border border-[#ccc] text-center font-Poppins_600">
                        {item.price.formatted_with_symbol}
                      </td>
                      <td className="border border-[#ccc] w-[10%]">
                        <div className="flex ">
                          <button
                            className="p-2 border border-[#ccc] cursor-pointer border-r-0 hover:bg-[#fc6539] hover:text-white disabled:cursor-not-allowed"
                            disabled={updating}
                            onClick={() =>
                              updateQty(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <input
                            type="text"
                            maxLength={2}
                            defaultValue={item.quantity}
                            className="flex p-2 border border-[#ccc] outline-none w-10 justify-center items-center text-center"
                          />
                          <button
                            className="p-2 border border-[#ccc] cursor-pointer border-l-0 hover:bg-[#fc6539] hover:text-white disabled:cursor-not-allowed"
                            disabled={updating}
                            onClick={() =>
                              updateQty(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border border-[#ccc] text-center font-Poppins_600">
                        {item?.line_total.formatted_with_symbol}
                      </td>
                      <td className="border border-[#ccc] text-center">
                        <button
                          className="btn btn-circle btn-sm disabled:cursor-not-allowed"
                          onClick={() => removeItem(item.id)}
                          disabled={removing}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between py-5 flex-col-reverse md:flex-row">
              <div className="flex gap-4">
                <Link to="/collections">
                  <div className="rounded-[5px] p-3 text-sm capitalize  bg-[#fc6539] hover:text-white">
                    Continue shopping
                  </div>
                </Link>
              </div>
              <div className="flex flex-col  md:w-2/6 bg-white p-5 rounded shadow mb-6">
                <div className="text-[20px] font-Poppins_600">Cart Total</div>
                <div className="flex flex-col w-full py-5">
                  <div className="flex justify-between items-center ">
                    <span className="border w-1/2 p-3 border-r-0 font-Poppins_600">
                      Subtotal
                    </span>
                    <span className="border w-1/2 p-3 font-Poppins_600">
                      {cart?.subtotal.formatted_with_symbol}
                    </span>
                  </div>
                </div>
                <a href={cart?.hosted_checkout_url}>
                  <div className="btn bg-transparent text-sm font-Poppins_600 border border-[#ccc] hover:bg-[#fc6539] hover:text-white w-full">
                    checkout ({cart?.subtotal.formatted_with_symbol})
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
