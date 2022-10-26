import { Outlet } from "react-router-dom";
import { NavBar } from "./components";


export const MainLayout = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
