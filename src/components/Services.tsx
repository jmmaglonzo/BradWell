import icon1 from "@/assets/food.svg";
import icon2 from "@/assets/hospitality.svg";
import icon3 from "@/assets/cleaning.svg";
import icon4 from "@/assets/industrial.svg";
import servicesImg from "@/assets/kevin-matos-Nl_FMFpXo2g-unsplash 1.jpg";

const Services = () => {
  return (
    <section className="container bg-secondaryBlue py-20">
      <div className="flex flex-col items-center gap-6 text-center text-white">
        <h3 className="text-4xl font-bold uppercase">Services</h3>
        <p className="w-1/2">
          At Bradwell, we specialize in providing top-quality products and
          services to a wide range of industries. With our expertise and
          dedication, we ensure that our clients receive the best solutions for
          their specific needs.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-3 items-center gap-8 text-white">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center gap-2">
            <img src={icon1} alt="Food manufacturer icon" width={50} />
            <span className="text-sm font-bold">
              Food Manufacturer Solutions
            </span>
            <p className="w-[70%] text-center text-xs">
              We offer a comprehensive range of ingredients and solutions for
              food and beverage manufacturers.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={icon2} alt="Food manufacturer icon" width={50} />
            <span className="text-sm font-bold">Hospitality Services </span>
            <p className="w-[70%] text-center text-xs">
              Our products and services cater to the unique needs of hotels and
              restaurants.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="to absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-t from-primaryOrange/70 to-transparent"></div>
          <img
            src={servicesImg}
            alt="buildings picture"
            className="w-full rounded-md"
          />
          <p className="absolute bottom-12 left-6 w-[70%] text-2xl font-bold">
            Serving Multiple Industries with Exceptional Products and Services
          </p>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-center gap-2">
            <img src={icon3} alt="Food manufacturer icon" width={50} />
            <span className="text-sm font-bold">Cleaning Solutions </span>
            <p className="w-[70%] text-center text-xs">
              We provide high-quality cleaning ingredients and solutions for
              laundry services and households.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={icon4} alt="Food manufacturer icon" width={50} />
            <span className="text-sm font-bold">Industrial Expertise</span>
            <p className="w-[70%] text-center text-xs">
              Our industrial chemicals and raw materials are trusted by various
              industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
