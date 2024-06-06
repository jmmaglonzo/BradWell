import { Fade } from "react-awesome-reveal";
import heroLogo from "/src/assets/hero-logo.png";
import herobg from "@/assets/bg-hero.jpg";
const Hero = () => {
  return (
    <section className="relative flex h-dvh items-center justify-center bg-gradient-to-t from-secondaryBlue to-transparent">
      <img
        src={herobg}
        alt="hero image"
        className="absolute -z-20 h-full w-full bg-center bg-no-repeat object-cover"
      />
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
        <Fade direction="down" triggerOnce={true} className="w-72 rounded-full">
          <img src={heroLogo} alt="Bradwell-logo" className="w-full" />
        </Fade>

        <Fade
          direction="left"
          triggerOnce={true}
          className="flex justify-center"
        >
          <h1 className="text-2xl font-bold md:w-[70%] md:text-4xl lg:w-[80%] lg:text-6xl lg:leading-[1.2] xl:w-[70%]">
            Delivering <span className="text-primaryOrange">High-Quality</span>{" "}
            Products for All Industries
          </h1>
        </Fade>
        <Fade
          direction="left"
          triggerOnce={true}
          className="flex justify-center"
        >
          <p className="text-sm font-medium md:w-[80%] md:text-lg lg:w-[70%] lg:text-xl">
            Bradwell is a one-stop shop for ingredients and chemicals used in
            food, beverages, household products, and industrial applications.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce={true} className="w-full md:w-auto">
          <a
            href="#products"
            className="inline-block w-full rounded-sm bg-primaryOrange px-16 py-2 text-lg font-medium text-white hover:bg-primaryOrange/90 xl:mt-8"
          >
            Products
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
