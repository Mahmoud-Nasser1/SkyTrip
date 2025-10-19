import BookingSummery from "./components/BookingSummery";
import PassengerInfo from "./components/PassengerInfo";
import StepperWithContent from "./components/StepperWithContent";

const Booking = () => {
  return (
    <div className="flex flex-col gap-12 container mx-auto my-24 ">
      <div
        className="flex justify-center backdrop-blur-xl bg-white/80  rounded-3xl p-9 shadow-lg border border-white/40 hover:shadow-2xl hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet duration-500"
      >
        <StepperWithContent />
      </div>
      <div className="flex lg:flex-row flex-col gap-6 container mx-auto">
        <PassengerInfo />
        <BookingSummery />
      </div>
    </div>
  );
};

export default Booking;
