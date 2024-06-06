import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carousel } from "@/utils/carousel";
import fiveStar from "@/assets/5-star.png";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Fade direction="up" triggerOnce={true}>
      <section className="container flex flex-col items-center justify-center py-8 md:py-24 lg:py-32">
        <Carousel
          setApi={setApi}
          className="flex w-full max-w-xl lg:max-w-4xl"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {carousel.map((c) => (
              <CarouselItem key={c.name}>
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center gap-6 p-4 text-center">
                    <img
                      src={fiveStar}
                      alt="five-star"
                      className="w-24 lg:w-32"
                    />

                    <p className="text-sm xl:text-xl">{c.desc}</p>
                    <span className="text-xl font-medium md:text-2xl">
                      {c.name}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden border-none md:block xl:-left-28" />
          <CarouselNext className="hidden border-none md:block xl:-right-28" />
        </Carousel>
        <div className="mt-6 flex space-x-2 py-2 text-center text-sm text-muted-foreground">
          {carousel.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${current === index + 1 ? "bg-black" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>
      </section>
    </Fade>
  );
};

export default Testimonials;
