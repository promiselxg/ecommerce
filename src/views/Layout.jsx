import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { Footer } from '../components';

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        {/* <div className="flex w-full justify-center text-center bg-[whitesmoke] py-12 border-t-[1px] border-[#eee]">
          <div className="container w-[80%] mx-auto">
            all rights reserved &copy; 2023
          </div>
        </div> */}
        <Footer />
      </div>
    </>
  );
};
