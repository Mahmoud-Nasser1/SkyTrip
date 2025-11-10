import SearchFlight from "./SearchFlight";

const FirstSection = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-screen flex  justify-center items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gradient-sky via-gradient-violet to-gradient-peach opacity-90"></div>
          <div className="absolute inset-0">
            <img
              src="/LandingImage.jpeg"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl md:text-7xl text-white mb-6 sm:block hidden mt-10" >
              Fly in Style, Arrive in Comfort
            </h1>
            <h3 className="text-xl lg:text-2xl text-white/90 mb-12 md:block hidden">
              Discover your next adventure with exclusive deals and seamless
              booking
            </h3>
            <SearchFlight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
