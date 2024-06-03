import brand1 from "@/assets/nestle.svg";
import brand2 from "@/assets/hyat.svg";
import brand3 from "@/assets/estee lauder.svg";
import brand4 from "@/assets/pfizer.svg";
import brand5 from "@/assets/abott.svg";
import brand6 from "@/assets/herbalife.svg";
import brand7 from "@/assets/starbucks.svg";

const brands = [
  {
    key: "nestle",
    img: brand1,
  },
  {
    key: "hyatt",
    img: brand2,
  },
  {
    key: "estee-lauder",
    img: brand3,
  },
  {
    key: "pfizer",
    img: brand4,
  },
  {
    key: "abbott",
    img: brand5,
  },
  {
    key: "herbalife",
    img: brand6,
  },
  {
    key: "starbucks",
    img: brand7,
  },
];

const Brands = () => {
  return (
    <section className="space-y-14 bg-secondaryBlue py-12 text-center text-white">
      <span className="text-xl font-bold uppercase">
        used by the world's most top companies
      </span>
      <div className="container flex items-center justify-center gap-12">
        {brands.map((b) => (
          <div key={b.key}>
            <img src={b.img} alt={b.key} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
