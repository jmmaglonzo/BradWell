import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const rootLayout = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white">
        <Navbar />
      </header>

      <main className="mt-12">
        <Outlet />
      </main>
    </>
  );
};

export default rootLayout;
