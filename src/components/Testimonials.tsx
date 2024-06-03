import { ChevronLeft, ChevronRight } from "lucide-react";
import profile from "@/assets/profile.svg";
import juliesbakeshop from "@/assets/juliesbakeshop.svg";
import { FaStar } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <section className="container py-20">
      <div className="flex items-center">
        <ChevronLeft size={120} />
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
          </div>
          <p className="w-1/2">
            Bradwell has been a game-changer for our bakery. Their extensive
            ingredient catalog allows us to find everything we need, from
            classic flours and sugars to unique flavor extracts and seasonal
            ingredients. The quality is always top-notch, and their customer
            service team is incredibly knowledgeable and helpful. They've been
            instrumental in helping us create innovative new pastries and keep
            our customers coming back for more.
          </p>

          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center gap-2 border-r-2 border-slate-700 pr-6">
              <img
                src={profile}
                alt="userProfile"
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold">Julie Ann</span>
                <span>Store Owner</span>
              </div>
            </div>
            <img src={juliesbakeshop} alt="julie's bakeshop" />
          </div>
        </div>
        <ChevronRight size={120} />
      </div>

      <div className="mt-12 flex justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-slate-950"></div>
        <div className="h-2 w-2 rounded-full bg-slate-400"></div>
        <div className="h-2 w-2 rounded-full bg-slate-400"></div>
        <div className="h-2 w-2 rounded-full bg-slate-400"></div>
        <div className="h-2 w-2 rounded-full bg-slate-400"></div>
      </div>
    </section>
  );
};

export default Testimonials;
