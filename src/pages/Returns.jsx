import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Returns = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DRF SHOPS | Return Policy</title>
      </Helmet>
      <div className="w-full flex bg-white">
        <div className="conatiner mx-auto w-[80%]">
          <div className="text-sm breadcrumbs pt-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Return</li>
            </ul>
          </div>
          <div className="flex w-full pt-10">
            <div className="container mx-auto flex justify-center flex-col text-center">
              <div className="divider">OUR RETURN POLICY</div>
            </div>
          </div>
          <div className="w-full py-4">
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We want you to be satisfied with your purchase. If you are not
              completely happy with your order, please refer to our Return
              Policy for instructions on returning products and receiving
              refunds.
            </p>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We do not accept exchanges. If you would like to order a different
              size, return your merchandise as soon as possible and we will
              issue you store credit if the items are deemed eligible according
              to the return requirements laid out below. Store credit can be
              used to order a different size or any of our other products.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              RETURN REQUIREMENTS:
            </h2>
            <ul className="my-list py-5">
              <li>
                To be eligible for a return, your item must be unused, in its
                original packaging, and in the same condition as when you
                received it.
              </li>
              <li>
                You have 15 days from the date of delivery to initiate a return
              </li>
              <li>
                To initiate a return, please contact our customer support team
                at [
                <a href="mailto:contactdrfshop@derightlimited.co.uk">
                  contactdrfshop@derightlimited.co.uk
                </a>
                ] with your order details and reason for the return.
              </li>
              <li>
                You are responsible for return shipping costs unless the item
                arrived damaged or defective.
              </li>
            </ul>
            <h2 className="font-[600] font-ProximaMedium">REFUNDS</h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              Once your return is received and inspected, we will notify you of
              the approval or rejection of your refund. If approved, the refund
              will be processed, and a credit will be applied to your original
              payment method within 7 business days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Returns;
