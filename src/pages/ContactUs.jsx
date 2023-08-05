import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactEmailIcon from '../assets/images/contact-email-icon.png';
import ContactFAQIcon from '../assets/images/contact-faq-icon.png';
import ContactPhoneIcon from '../assets/images/contact-phone-icon.webp';

const ContactUs = () => {
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
        <title>DRF SHOPS | Contact Us</title>
      </Helmet>
      <div className="w-full flex bg-white">
        <div className="container mx-auto py-4 w-[80%]">
          <div className="text-sm breadcrumbs pt-10 text-[rgba(0,0,0,.8)]">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row w-full pt-10">
            <div className="container mx-auto flex justify-center flex-col text-center">
              <div className="divider">CONTACT US</div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="flex  py-5">
              <div className="flex items-center gap-3">
                <img src={ContactEmailIcon} alt="email us" />
                <h2>Email</h2>
              </div>
              <div className="flex flex-col ml-10">
                <span>For general enquiries:</span>
                <span>contactdrfshop@derightlimited.co.uk</span>
              </div>
            </div>
            <div className="flex py-5">
              <div className="flex items-center gap-3">
                <img src={ContactFAQIcon} alt="email us" />
                <h2>FAQ</h2>
              </div>
              <div className="flex flex-col ml-10">
                <span>Got any enquiry?</span>
                <span>
                  send us an email{' '}
                  <a href="mailto:contactdrfshop@derightlimited.co.uk">
                    contactdrfshop@derightlimited.co.uk
                  </a>
                </span>
              </div>
            </div>
            <div className="flex py-5">
              <div className="flex items-center gap-3">
                <img src={ContactPhoneIcon} alt="email us" />
                <h2>Phone</h2>
              </div>
              <div className="flex flex-col ml-10">
                <span>+44 (161) 706 2149 Monday to Friday:</span>
                <span>9:30am-5:00pm UTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
