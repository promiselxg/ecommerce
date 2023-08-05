import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <div className="flex w-full h-fit bg-[whitesmoke] border-t-[1px] border-[#eee] flex-col py-10">
        <div className="container mx-auto w-[90%] md:w-[70%] flex justify-between gap-5 p-10 flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="logo">
              <img src={Logo} alt="logo" className="h-[70px]" />
            </div>
            <p className="text-[14px] font-ProximaMedium max-w-xs">
              EMAIL:{' '}
              <a href="mailto:contactdrfshop@derightlimited.co.uk">
                contactdrfshop@derightlimited.co.uk
              </a>
            </p>
            <p>
              Phone : <a href="tel:+441617062149">+44 161 706 2149</a>
            </p>
          </div>
          <div className="w-full md:w-1/2 border-t-[1px] md:border-t-0">
            <div className="grid grid-cols-2 gap-2 py-10 font-ProximaMedium uppercase text-[12px] md:text-[14px]">
              <Link to="/pages/return" className="hover:underline w-fit">
                Returns
              </Link>
              <Link to="/pages/size-guide" className="hover:underline w-fit">
                Size Guides
              </Link>
              {/* <Link to="/pages/shipping" className="hover:underline w-fit">
                Shipping
              </Link> */}
              {/* <Link to="/" className="hover:underline w-fit">
                About Us
              </Link> */}
              <Link to="/pages/contact-us" className="hover:underline w-fit">
                Contact Us
              </Link>
              {/* <Link to="/pages/privacy" className="hover:underline w-fit">
                Privacy Policy
              </Link> */}
              <Link to="/pages/terms" className="hover:underline w-fit">
                ToC and Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-[90%] md:w-[70%] p-5 border justify-center flex border-[#eee] rounded-[5px]">
          <img
            src="https://www.boohoo.com/on/demandware.static/-/Library-Sites-boohoo-content-global-sfra/default/dw623cf164/images/footer/uk_payment_fooer_strip_desk_1811.svg"
            alt=""
          />
        </div>
        <div className="container mx-auto p-5 justify-center flex gap-5">
          <a
            href="https://m.facebook.com/story.php?story_fbid=pfbid04kk6FQYsinbD2vg85JsSGsgzvScPJhVnwFKcBtLdSAWTE5ZoyPMeaktLjfyNsymTl&id=100095216784997"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook className="text-[24px] font-ProximaMedium text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]" />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <FiTwitter className="text-[24px] font-ProximaMedium text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]" />
          </a> */}
          <a
            href="https://www.instagram.com/p/CvjkSEULUHG/?igshid=NjFhOGMzYTE3ZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="text-[24px] font-ProximaMedium text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]" />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <FiYoutube className="text-[24px] font-ProximaMedium text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.7)]" />
          </a> */}
        </div>
        <div className="container flex justify-center text-center py-5">
          <p className="text-[12px] font-ProximaMedium">
            &copy; 2023 drfshop. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
