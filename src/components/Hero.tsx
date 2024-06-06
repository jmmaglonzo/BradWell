import heroLogo from "/src/assets/hero-logo.png";

const Hero = () => {
  return (
    <section className="flex h-screen items-center justify-center bg-secondaryBlue/70 bg-[url('/src/assets/bg-hero.jpg')] bg-cover bg-center bg-no-repeat py-20 bg-blend-overlay">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center text-white">
        <div className="w-60 rounded-full md:w-72 xl:mt-20">
          <img src={heroLogo} alt="Bradwell-logo" className="w-full" />
        </div>

        <h1 className="text-2xl font-bold md:w-[70%] md:text-4xl lg:w-[80%] lg:text-6xl xl:w-[70%]">
          Delivering <span className="text-primaryOrange">High-Quality</span>{" "}
          Products for All Industries
        </h1>

        <p className="text-sm font-medium md:w-[80%] md:text-lg lg:w-[70%] lg:text-2xl">
          Bradwell is a one-stop shop for ingredients and chemicals used in
          food, beverages, household products, and industrial applications.
        </p>

        <a
          href="#products"
          className="rounded-sm bg-primaryOrange px-8 py-2 text-xl font-bold text-white hover:bg-primaryOrange/90"
        >
          Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
