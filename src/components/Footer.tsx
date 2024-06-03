import footerLogo from "@/assets/footer-logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container bg-secondaryBlue py-20 text-white">
      <div className="flex justify-between border border-white p-8">
        <div className="flex flex-1 flex-col gap-8">
          <img src={footerLogo} alt="BradWell-logo" width={120} />

          <div className="flex flex-col text-sm">
            <span className="font-bold">Address:</span>
            <p>84 Malakas St. Brgy. Pinyahan Quezon City</p>
          </div>

          <div className="flex flex-col text-sm">
            <span className="font-bold">Contact:</span>
            <p>639-992-5585302 | 639-966-6432128 | 639-977-7122</p>
          </div>

          <div className="flex items-center gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>

        <div className="flex gap-8 text-sm">
          <ul className="flex flex-col gap-4">
            <li className="font-semibold">Products</li>
            <li className="font-semibold">Services</li>
            <li className="font-semibold">Contact Us</li>
            <li className="font-semibold">FAQ</li>
            <li className="font-semibold">SUpport</li>
          </ul>

          <ul className="flex flex-col gap-4">
            <li className="font-semibold">Products</li>
            <li className="font-semibold">Services</li>
            <li className="font-semibold">Contact Us</li>
            <li className="font-semibold">FAQ</li>
            <li className="font-semibold">SUpport</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
