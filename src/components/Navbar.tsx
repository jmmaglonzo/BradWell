import logo from "@/assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const links = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "testimonials",
    label: "Testimonials",
  },
  {
    key: "products",
    label: "Products",
  },
  {
    key: "services",
    label: "Services",
  },
];

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} alt="BradWell Logo" width={50} />
      </Link>
      <ul className="flex flex-1 items-center gap-4">
        {links.map((c) => (
          <NavLink to={""} key={c.key}>
            {c.label}
          </NavLink>
        ))}
      </ul>

      <div className="flex gap-2">
        <Button
          variant={"secondary"}
          className="border border-slate-700 px-8 text-sm"
        >
          Login
        </Button>
        <Button className="bg-primaryOrange hover:bg-primaryOrange/90 font-semibol4 px-8 text-sm text-white">
          Signup
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
