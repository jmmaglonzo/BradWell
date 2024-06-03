import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const rootLayout = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-white">
        <Navbar />
      </header>

      <main className="mt-28">
        <Outlet />
      </main>
    </>
  );
};

export default rootLayout;
