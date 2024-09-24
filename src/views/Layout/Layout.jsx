import NavbarItem from '../../components/Navbar/NavbarItem';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer.jsx/Footer';
import Hero from './components/Hero';

const Layout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <NavbarItem />
      <main className=" flex flex-col justify-center items-center bg-aliceblue w-full max-w-screen-xl flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
