import NavbarItem from "../../components/Navbar/NavbarItem";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer.jsx/Footer";
import Staff from "./components/Staff/Staff";
import FAQ from "./components/FAQ/FAQ";
import Review from "./components/Review/Review";
import Subscription from "./components/Subscription/Subscription";

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
