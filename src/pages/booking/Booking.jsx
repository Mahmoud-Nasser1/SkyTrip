import BookingSummery from "./components/BookingSummery";
import PassengerInfo from "./components/PassengerInfo";
import StepperWithContent from "./components/StepperWithContent";

const Booking = () => {
  return (
    <div className="flex flex-col gap-12 container mx-auto my-16 p-10    ">
      <div
        className="flex justify-center backdrop-blur-xl bg-white/80  rounded-3xl p-9 shadow-lg border border-white/40 hover:shadow-2xl hover:shadow-gradient-violet/30 dark:bg-dark-card 
  hover:scale-[1] hover:border-gradient-violet duration-500  dark:border-white/10"
      >
        <StepperWithContent numPage={0}/>
      </div>
      <div className="flex lg:flex-row flex-col gap-6 container mx-auto ">
        <PassengerInfo />
        <BookingSummery />
      </div>
    </div>
  );
};

export default Booking;
