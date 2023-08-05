import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Terms = () => {
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
        <title>DRF SHOPS | Terms and Condition | Privacy Policy</title>
      </Helmet>
      <div className="w-full flex bg-white">
        <div className="container mx-auto w-[80%]">
          <div className="text-sm breadcrumbs pt-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Terms and Condition</li>
            </ul>
          </div>
          <div className="flex w-full pt-10">
            <div className="container mx-auto flex justify-center flex-col text-center">
              <div className="divider">
                TERMS AND CONDITION / PRIVACY POLICY
              </div>
            </div>
          </div>
          <div className="w-full py-4">
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              By using drfshop&apos;s services, you agree to our Terms and
              Conditions. These terms outline the rules and guidelines governing
              your shopping experience with us. Please review them before making
              a purchase.
            </p>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              These terms were last updated 05 August 2023.
            </p>
            <h2 className="font-[600] font-ProximaMedium">Privacy Policy</h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              DRF Shop takes customer security and privacy very seriously. The
              full Privacy Policy can be found here:{' '}
              <Link to="/pages/privacy">Privacy Policy Page</Link>
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Product Information
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We strive to provide accurate product descriptions and images.
              However, we do not warrant that product information on our website
              is error-free, complete, or up-to-date.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Pricing and Payment
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              All prices are displayed in the currency specified on our website.
              We reserve the right to modify prices or discontinue products
              without prior notice. Payment must be made at the time of order
              placement.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Shipping and Delivery
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We will make every effort to deliver your orders within the
              estimated time frame(Delivery will be processed between 3-7
              working days). However, delays may occur due to unforeseen
              circumstances beyond our control. You will be notified of any
              significant delays.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Information We Collect
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              When you visit our website or make a purchase, we may collect
              certain information from you, including:
            </p>
            <ul className="my-list">
              <li>
                Personal Information: Your name, contact details, billing and
                shipping addresses, and payment information
              </li>
              <h2 className="font-[600] font-ProximaMedium">
                How We Use Your Information
              </h2>
              <p className="py-3 text-[rgba(0,0,0,.7)]">
                We use the collected data to:
              </p>
              <ul className="my-list">
                <li>Process and fulfill your orders</li>
                <li>
                  Improve our website and services based on your feedback and
                  preferences
                </li>
                <li>
                  Communicate with you about your orders, promotions, and
                  updates
                </li>
                <li>
                  Protect against fraud and maintain the security of our website
                </li>
              </ul>
            </ul>
            <h2 className="font-[600] font-ProximaMedium">Data Protection</h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We take appropriate measures to safeguard your personal
              information and prevent unauthorized access. Your payment details
              are encrypted and transmitted securely using industry-standard SSL
              technology.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Third Party Services
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We may share your information with trusted third-party service
              providers to assist in order processing, shipping, and analytics.
              These third parties are required to protect your data and use it
              solely for the purposes we specify.
            </p>
            <h2 className="font-[600] font-ProximaMedium">Your Choices</h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              You can update or delete your account information at any time. If
              you wish to opt-out of marketing communications, you can do so by
              following the instructions provided in the emails we send you.
            </p>
            <h2 className="font-[600] font-ProximaMedium">Cookies</h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We use cookies to enhance your browsing experience and personalize
              content. You can control cookies through your browser settings.
            </p>
            <h2 className="font-[600] font-ProximaMedium">Change in Policy</h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We may update this Privacy Policy from time to time. Any revisions
              will be posted on our website, and the effective date will be
              indicated.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Prohibited Activities
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              You agree not to engage in any unlawful or harmful activities
              while using our website, including but not limited to hacking,
              spamming, or impersonating others
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Disclaimer of Liability
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We strive to maintain accurate and reliable information on our
              website. However, drfshop shall not be liable for any direct,
              indirect, or consequential damages resulting from the use of our
              website or products.
            </p>
            <h2 className="font-[600] font-ProximaMedium">
              Changes to the Terms
            </h2>
            <p className="py-3 text-[rgba(0,0,0,.7)]">
              We may update these Terms and Conditions at any time without prior
              notice. It is your responsibility to review the latest version
              available on our website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
