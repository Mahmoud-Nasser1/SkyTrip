import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdSubject } from "react-icons/md";

const SendMessage = () => {
  //   const navigate = useNavigate();
  //   const goPayment = () => {
  //     navigate("/payment");
  //   };
  return (
    <div
      className="lg:w-3/5 w-full m-5 p-8 flex flex-col gap-6 justify-center 
  rounded-3xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/40 
  transition-all duration-300 hover:shadow-2xl hover:shadow-gradient-violet/30 
  hover:scale-[1.01] hover:border-gradient-violet"
    >
      <h1 className="mb-2">Send Us a Message</h1>

      <div>
        <label htmlFor="title" className="flex  gap-2 text-gray-700 mb-2">
          <CiUser className="text-xl text-gradient-violet" />
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full	
             focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none 
               bg-white text-gray-700"
        />
      </div>
      <div>
        <label htmlFor="title" className="flex  gap-2 text-gray-700 mb-2">
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Email Address
        </label>
        <input
          type="text"
          placeholder="JohnDoe@gmail.com"
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full	
             focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none 
               bg-white text-gray-700"
        />
      </div>
      <div>
        {" "}
        <label htmlFor="title" className="flex  gap-2 text-gray-700 mb-2">
          <MdSubject className="text-xl text-gradient-violet" />
          Subject
        </label>
        <select
          name="subject"
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 text-base shadow-sm
  focus:outline-none focus:ring-1 focus:ring-gradient-violet focus:border-transparent"
        >
          <option value="" disabled hidden>
            Select a subject
          </option>
          <option>Booking Inquiry</option>
          <option>Flight Changes</option>
          <option>Refund Request</option>
          <option>Technical Support</option>
          <option>General Question</option>
        </select>
      </div>
      <div>
        <label htmlFor="title" className="flex  gap-2 text-gray-700 mb-2">
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="6"
          placeholder="Write your message..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 text-base shadow-sm 
         focus:outline-none focus:ring-1 focus:ring-gradient-violet focus:border-transparent "
        ></textarea>
      </div>

      {/* <button
        // onClick={goPayment}
        className=" px-8 py-5 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl transition-all"
      >
        Send Massege
      </button> */}

      <button
        // onClick={goPayment}
        className="relative overflow-hidden px-8 py-5 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white font-semibold tracking-wide transition-all duration-300 
             shadow-lg hover:shadow-gradient-peach/40 hover:scale-[1.05] hover:shadow-2xl"
      >
        <span className="relative z-10">Send Message</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gradient-peach to-gradient-violet opacity-0 transition-opacity duration-300 hover:opacity-100 blur-md"></span>
      </button>
    </div>
  );
};

export default SendMessage;
