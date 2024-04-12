import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-6xl flex mx-auto">
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
