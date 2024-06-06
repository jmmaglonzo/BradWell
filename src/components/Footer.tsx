import { Icon } from "@iconify/react";
import footerLogo from "@/assets/bradwell-logo-white.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <section className="bg-secondaryBlue pb-8 pt-16 text-center">
      <Fade triggerOnce={true}>
        <div className="container flex flex-col items-center justify-between gap-8 border-b border-gray-400 px-8 pb-16 lg:flex-row">
          <img
            src={footerLogo}
            alt="bradwell-logo"
            className="w-40 md:block lg:hidden"
          />

          <div className="order-2 flex flex-col gap-4 lg:order-1">
            <img
              src={footerLogo}
              alt="bradwell-logo"
              className="hidden w-40 lg:block"
            />
            <ul className="flex flex-col items-center gap-4 text-white lg:items-start lg:gap-8">
              <li className="flex items-center gap-2">
                <Icon icon="carbon:location-filled" color="F15725" width={40} />
                <a
                  href="https://www.google.com/maps/place/84+Malakas+St,+Diliman,+Quezon+City,+1100+Metro+Manila/@14.6391263,121.0484893,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b7a6f1cc7fed:0xadad4ce621a5988e!8m2!3d14.6391263!4d121.0484893!16s%2Fg%2F11c5nzsyvz?entry=ttu"
                  target="_blank"
                  className="text-sm duration-300 hover:text-primaryOrange lg:text-xl"
                >
                  84 Malakas St. Brgy. Pinyahan Quezon City
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="ic:baseline-email" color="F15725" width={40} />
                <a
                  href="mailto: armand@bradwell.ph"
                  target="_blank"
                  className="text-sm duration-300 hover:text-primaryOrange lg:text-xl"
                >
                  armand@bradwell.ph
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="ic:sharp-phone" color="F15725" width={40} />
                <a
                  href="tel: 8556-2179"
                  target="_blank"
                  className="text-sm duration-300 hover:text-primaryOrange lg:text-xl"
                >
                  8556-2179
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="ic:outline-phone-android"
                  color="F15725"
                  width={40}
                />
                <div className="flex flex-col items-center gap-4 lg:flex-row">
                  <div className="flex flex-col">
                    <a
                      href="tel:+639 966 643 2128"
                      className="text-xs duration-300 hover:text-primaryOrange lg:text-xl"
                    >
                      +639 966 643 2128
                    </a>
                    <a
                      href="tel:+639 992 558 5203"
                      className="text-xs duration-300 hover:text-primaryOrange lg:text-xl"
                    >
                      +639 992 558 5203
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="tel: +639 977 324 0927"
                      className="text-xs duration-300 hover:text-primaryOrange lg:text-xl"
                    >
                      +639 977 324 0927
                    </a>
                    <a
                      href="tel: +639 932 194 4240"
                      className="text-xs duration-300 hover:text-primaryOrange lg:text-xl"
                    >
                      +639 932 194 4240
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="order-1 flex flex-col items-center gap-4 lg:order-2">
            <span className="text-3xl font-medium uppercase text-white">
              follow us
            </span>
            <ul className="flex items-center justify-center gap-6">
              <a
                href="https://web.facebook.com/bradwellcorp?_rdc=1&_rdr"
                target="_blank"
              >
                <FaFacebook size={50} className="text-primaryOrange" />
              </a>
              <a href="https://www.instagram.com/bradwellcorp/" target="_blank">
                <FaInstagram size={50} className="text-primaryOrange" />
              </a>
              <a href="https://www.tiktok.com/@bradwellcorp">
                <FaTiktok size={50} className="text-primaryOrange" />
              </a>
            </ul>
          </div>
        </div>
        <span className="mt-6 inline-block text-sm font-medium text-white lg:text-xl">
          © 2024 Bradwell Sales & Marketing Corp. All Rights Reserved.
        </span>
      </Fade>
    </section>
  );
};

export default Footer;
