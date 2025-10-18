import FirstSection from "./components/FirstSection";
import HelpCenter from "./components/HelpCenter";
import LocationAndHours from "./components/LocationAndHours";
import SendMessage from "./components/SendMessage";

const ContactUs = () => {
  return (
    <div className="bg-light-background">
      <div className="flex flex-col gap-10">
        <FirstSection />
        <div className="flex lg:flex-row flex-col gap-5 container m-auto">
          <SendMessage />
          <div className="flex flex-col gap-5">
            <HelpCenter />
            <LocationAndHours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
