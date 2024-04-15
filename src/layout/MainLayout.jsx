import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Fotter from "../components/Fotter";


const MainLayout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
       <Fotter />
    </div>
  );
};

export default MainLayout;
