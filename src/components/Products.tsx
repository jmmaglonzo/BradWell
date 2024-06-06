import { products } from "@/utils/products";
import { Fade } from "react-awesome-reveal";

const Products = () => {
  return (
    <section className="container px-4 py-20" id="products">
      <div className="flex flex-col items-center">
        <Fade direction="left" triggerOnce={true} duration={1500}>
          <div className="flex flex-col items-center gap-2 text-center md:gap-4">
            <h3 className="text-4xl font-bold uppercase">products</h3>
            <p className="text-lg md:text-xl">
              Discover solutions for every industry, from food & beverage to
              household & industrial.
            </p>
          </div>
        </Fade>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Fade direction="left" triggerOnce={true} cascade={true}>
            {products.map((c) => (
              <div
                key={c.label}
                className="relative overflow-hidden rounded-md text-center text-white"
              >
                <img src={c.img} alt={c.label} className="w-full" />
                <span className="absolute bottom-0 left-0 right-0 bg-primaryOrange p-3 text-xl font-medium">
                  {c.label}
                </span>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Products;
