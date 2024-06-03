import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-secondaryBlue/70 bg-[url('/src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center space-y-4 text-center text-white">
        <h1 className="w-[55%] text-5xl font-bold">
          Delivering <span className="text-primaryOrange">High-Quality</span>{" "}
          Products for All Industries
        </h1>
        <p className="w-[40%]">
          Bradwell is a one-stop shop for ingredients and chemicals used in
          food, beverages, household products, and industrial applications.{" "}
        </p>
        <div className="flex items-center gap-2">
          <Button className="bg-primaryOrange px-8 hover:bg-primaryOrange/90">
            Elevate Your Products
          </Button>
          <Button className="border-2 border-white bg-transparent px-8 text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
