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
      {/* <main className=" flex flex-col justify-center items-center bg-white bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%27%20height=%27100%27%20viewBox=%270%200%20100%20100%27%3E%3Cg%20stroke=%27%23CCC%27%20stroke-width=%270%27%3E%3Crect%20fill=%27%23F5F5F5%27%20x=%27-60%27%20y=%27-60%27%20width=%27110%27%20height=%27240%27/%3E%3C/g%3E%3C/svg%3E')] w-full max-w-screen-xl flex-1"> */}
      <main className="flex flex-col flex-1 w-full max-w-screen-xl justify-center items-center">
        <Outlet />
        <Staff />
        <FAQ />
        <Review />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
