import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdSubject } from "react-icons/md";

const SendMessage = () => {
  //   const navigate = useNavigate();
  //   const goPayment = () => {
  //     navigate("/payment");
  //   };

  const dbUser = {
    firstName: "Jane",
    lastName: "Doe",
    email: "mahmoudnasser80@gmail.com",
    phoneNumber: "01142070488",
    password: "Password@123",
  };

  const [userInfo, setUserInfo] = useState({
    fullName: dbUser.firstName + dbUser.lastName,
    email: dbUser.email,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInputs = () => {
    const newErrors = {
      fullName:
        userInfo.fullName.length < 3 ||
        userInfo.fullName[0] !== userInfo.fullName[0].toUpperCase() ||
        userInfo.fullName.includes(" ")
          ? "Full name must be at least 3 letters, start with a capital letter, and contain no spaces."
          : "",
      email: !emailCheck.test(userInfo.email)
        ? "Please enter a valid email address."
        : "",
      subject: userInfo.subject === "" ? "Please select a subject." : "",
      message:
        userInfo.message.length < 10
          ? "Message must be at least 10 characters long."
          : "",
    };
    setErrors(newErrors);
  };

  return (
    <div
      className="lg:w-3/5 w-full max-w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 justify-center 
rounded-3xl bg-white/80 dark:bg-dark-card backdrop-blur-xl shadow-lg border border-white/40 dark:border-dark-border
transition-all duration-300 hover:shadow-2xl hover:shadow-gradient-violet/30 
hover:scale-[1] hover:border-gradient-violet
"
    >
      <h1 className="mb-2 text-gray-900 dark:text-white">Send Us a Message</h1>

      <div>
        <label
          htmlFor="title"
          className="flex  gap-2 text-gray-700 dark:text-gray-300 mb-2"
        >
          <CiUser className="text-xl text-gradient-violet" />
          Full Name
        </label>
        <input
          type="text"
          value={userInfo.fullName}
          onChange={(e) => {
            setUserInfo({ ...userInfo, fullName: e.target.value });
          }}
          className={`px-4 py-3 rounded-2xl border w-full focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white dark:bg-dark-input text-gray-700 dark:text-gray-200 ${
            errors.fullName
              ? "border-light-destructive dark:border-light-destructive"
              : "border-gray-200 dark:border-gray-600"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="title"
          className="flex  gap-2 text-gray-700 dark:text-gray-300 mb-2"
        >
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Email Address
        </label>
        <input
          type="text"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({ ...userInfo, email: e.target.value });
          }}
          className={`px-4 py-3 rounded-2xl border w-full focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white dark:bg-dark-input text-gray-700 dark:text-gray-200 ${
            errors.email
              ? "border-light-destructive dark:border-light-destructive"
              : "border-gray-200 dark:border-gray-600"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        {" "}
        <label
          htmlFor="title"
          className="flex  gap-2 text-gray-700 dark:text-gray-300 mb-2"
        >
          <MdSubject className="text-xl text-gradient-violet" />
          Subject
        </label>
        <select
          name="subject"
          defaultValue=""
          onChange={(e) => {
            setUserInfo({ ...userInfo, subject: e.target.value });
          }}
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gradient-violet focus:border-transparent ${
            errors.subject
              ? "border-light-destructive dark:border-light-destructive"
              : "border-gray-300 dark:border-gray-600"
          }`}
        >
          <option value="" disabled hidden>
            Select a subject
          </option>
          <option className="option-item">Booking Inquiry</option>
          <option className="option-item">Flight Changes</option>
          <option className="option-item">Refund Request</option>
          <option className="option-item">Technical Support</option>
          <option className="option-item">General Question</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="title"
          className="flex  gap-2 text-gray-700 dark:text-gray-300 mb-2"
        >
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="6"
          placeholder="Write your message..."
          onChange={(e) => {
            setUserInfo({ ...userInfo, message: e.target.value });
          }}
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-input text-gray-800 dark:text-gray-200 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-gradient-violet focus:border-transparent ${
            errors.message
              ? "border-light-destructive dark:border-light-destructive"
              : "border-gray-300 dark:border-gray-600"
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* <button
        // onClick={goPayment}
        className=" px-8 py-5 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl transition-all"
      >
        Send Massege
      </button> */}

      <button
        onClick={validateInputs}
        className="relative overflow-hidden px-8 py-5 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white font-semibold tracking-wide transition-all duration-300 
             shadow-lg hover:shadow-gradient-peach/40 hover:scale-[1] hover:shadow-2xl"
      >
        <span className="relative z-10">Send Message</span>
        <span className="absolute inset-0 bg-gradient-to-r from-gradient-peach to-gradient-violet opacity-0 transition-opacity duration-300 hover:opacity-100 blur-md"></span>
      </button>
    </div>
  );
};

export default SendMessage;
