import product1 from "@/assets/Gallery/1.jpg";
import product2 from "@/assets/Gallery/2.png";
import product3 from "@/assets/Gallery/3.jpg";
import product4 from "@/assets/Gallery/4.jpg";
import product5 from "@/assets/Gallery/5.jpg";
import product6 from "@/assets/Gallery/6.jpg";

const products = [
  {
    key: "product1",
    img: product1,
  },
  {
    key: "product2",
    img: product2,
  },
  {
    key: "product3",
    img: product3,
  },
  {
    key: "product4",
    img: product4,
  },
  {
    key: "product5",
    img: product5,
  },
  {
    key: "product6",
    img: product6,
  },
];

const Products = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold uppercase">Products</h2>
        <p>
          Discover solutions for every industry, from food & beverage to
          household & industrial.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.key}>
            <img src={p.img} alt={p.key} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
