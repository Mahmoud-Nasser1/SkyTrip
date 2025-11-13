import { IoIosArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { LuPlane } from "react-icons/lu";

const Hero = ({ city, ccountry, price, rating, reviews, image }) => {
  return (
    <div>
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <button className="absolute top-24 left-4 md:left-8 backdrop-blur-xl bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full border border-white/30 transition-all flex items-center gap-2">
          <IoIosArrowRoundBack className="text-2xl" /> Back
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-white/90 mb-2">
              <CiLocationOn className="text-2xl" />
              <span>{city}</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-4">{ccountry}</h1>
            <p className="text-xl text-white/90 mb-4">
              Where Tradition Meets Future
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <CiStar className="text-yellow-400 text-2xl" />
                <span className="text-white/90 text-lg">{rating}</span>
                <span className="text-white/70">({reviews} reviews)</span>
                <div className="text-white/70">•</div>
              </div>
              <div className="flex items-center gap-2">
                <LuPlane className="text-2xl text-white/90" />
                <span className="text-white">From ${price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
