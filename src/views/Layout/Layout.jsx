import NavbarItem from "../../components/Navbar/NavbarItem";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer.jsx/Footer";


const Layout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-aliceblue">
      <NavbarItem />
      <main className="py-12 flex flex-col flex-1 w-full max-w-screen-xl justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
