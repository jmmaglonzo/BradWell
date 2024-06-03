import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rootLayout = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white">
        <Navbar />
      </header>

      <main className="mt-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default rootLayout;
