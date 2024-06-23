import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="bg-[#EBF4F6] min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
