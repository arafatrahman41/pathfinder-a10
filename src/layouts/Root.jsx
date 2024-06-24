import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="bg-[#EBF4F6] min-h-[calc(100vh-562px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
