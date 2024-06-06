import servicesImg from "@/assets/bg-service.jpg";
import { services } from "@/utils/services";

const Services = () => {
  return (
    <section className="bg-secondaryBlue py-20">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <h3 className="text-4xl font-bold uppercase">Services</h3>
          <p className="font-medium md:w-1/2">
            At Bradwell, we specialize in providing top-quality products and
            services to a wide range of industries. With our expertise and
            dedication, we ensure that our clients receive the best solutions
            for their specific needs.
          </p>
        </div>
        <div className="mt-20 flex flex-col items-center justify-center gap-8 text-white md:flex-row">
          <div className="flex flex-col items-center gap-8 text-center md:gap-20">
            {services.slice(0, 2).map((service) => (
              <div
                key={service.key}
                className="flex flex-col items-center gap-4 text-center md:w-[70%] lg:w-full"
              >
                {service.icon}
                <span className="font-bold md:text-lg xl:text-xl">
                  {service.label}
                </span>
                <p className="font-medium">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative hidden w-full overflow-hidden rounded-xl text-center lg:block">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-primaryOrange/70 to-transparent"></div>
            <img
              src={servicesImg}
              alt=""
              className="h-[500px] w-full object-fill"
            />
            <p className="absolute left-0 text-4xl font-bold lg:top-44 xl:top-40 xl:text-5xl">
              Serving Multiple Industries with Exceptional Products and Services
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 text-center md:gap-20">
            {services.slice(2, 4).map((service) => (
              <div
                key={service.key}
                className="flex flex-col items-center gap-4 md:w-[70%] lg:w-full"
              >
                {service.icon}
                <span className="font-bold md:text-lg xl:text-xl">
                  {service.label}
                </span>
                <p className="font-medium">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
