import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
        <title>DRF SHOPS | Privacy Policy</title>
      </Helmet>
      <div className="w-full bg-white">
        <div className="container  mx-auto w-[80%]">
          <div className="text-sm breadcrumbs pt-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex w-full pt-10">
            <div className="container mx-auto flex justify-center flex-col text-center">
              <div className="divider">OUR PRIVACY POLICY</div>
            </div>
          </div>
          <p>
            Welcome to drfshop! We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your data when you interact with
            our website and make purchases from us. By using our services, you
            consent to the practices outlined in this policy
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
