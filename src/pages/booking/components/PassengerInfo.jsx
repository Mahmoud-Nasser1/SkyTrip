import { CiUser } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PassengerInfo = () => {
  const navigate = useNavigate();

  const dbUser = {
    firstName: "Jane",
    lastName: "Doe",
    email: "mahmoudnasser80@gmail.com",
    phoneNumber: "01142070488",
    password: "Password@123",
  };

  const [userInfo, setUserInfo] = useState({
    firstName: dbUser.firstName,
    lastName: dbUser.lastName,
    phoneNumber: dbUser.phoneNumber,
    passportNumber: "A123456",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    passportNumber: "",
  });

  let phoneCheck = /^(?:\+20|0020)?01[0125][0-9]{8}$/;
  let passportCheck = /^[A-Z0-9]{6,9}$/;

  const validateInputs = () => {
    const newErrors = {
      firstName:
        userInfo.firstName.length < 3 ||
        userInfo.firstName[0] !== userInfo.firstName[0].toUpperCase() ||
        userInfo.firstName.includes(" ")
          ? "First name must be at least 3 letters, start with a capital letter, and contain no spaces."
          : "",

      lastName:
        userInfo.lastName.length < 3 ||
        userInfo.lastName[0] !== userInfo.lastName[0].toUpperCase() ||
        userInfo.lastName.includes(" ")
          ? "Last name must be at least 3 letters, start with a capital letter, and contain no spaces."
          : "",

      phoneNumber: !phoneCheck.test(userInfo.phoneNumber)
        ? "Please enter a valid phone number."
        : "",
      passportNumber: !passportCheck.test(userInfo.passportNumber)
        ? "Please enter a valid passport number."
        : "",
    };

    setErrors(newErrors);
    console.log(newErrors);

    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.phoneNumber &&
      !newErrors.passportNumber
    ) {
      navigate("/payment");
    }
  };

  return (
    <div className="w-full lg:w-3/4 box-border p-6 flex flex-col gap-6 bg-white rounded-2xl shadow-lg justify-center mx-auto transition-all duration-500 hover:shadow-2xl hover:shadow-gradient-violet/30 border border-white/40 hover:scale-[1] hover:border-gradient-violet dark:bg-dark-card  dark:border-white/10">
      <h1 className="mb-2 dark:text-white">Passenger Information</h1>

      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex-1 min-w-0">
          <label
            htmlFor="first-name"
            className="flex gap-1 text-gray-700 mb-2 dark:text-white"
          >
            <CiUser
              className="text-xl text-gradient-violet font-normal "
              style={{ strokeWidth: 1.1 }}
            />
            First Name
          </label>
          <input
            type="text"
            value={userInfo.firstName}
            onChange={(e) => {
              setUserInfo({ ...userInfo, firstName: e.target.value });
            }}
            className={`px-4 py-3 rounded-2xl border w-full focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white dark:bg-dark-input text-gray-700 dark:text-gray-200 ${
              errors.firstName
                ? "border-light-destructive dark:border-light-destructive"
                : "border-gray-200 dark:border-gray-600"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <label
            htmlFor="last-name"
            className="flex gap-2 text-gray-700 mb-2 dark:text-white"
          >
            <CiUser
              className="text-xl text-gradient-violet "
              style={{ strokeWidth: 1.1 }}
            />
            Last Name
          </label>
          <input
            type="text"
            value={userInfo.lastName}
            onChange={(e) => {
              setUserInfo({ ...userInfo, lastName: e.target.value });
            }}
            className={`px-4 py-3 rounded-2xl border w-full focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white dark:bg-dark-input text-gray-700 dark:text-gray-200 ${
              errors.lastName
                ? "border-light-destructive dark:border-light-destructive"
                : "border-gray-200 dark:border-gray-600"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="min-w-0">
        <label
          htmlFor="title"
          className="flex gap-2 text-gray-700 mb-2 dark:text-white"
        >
          <MdOutlineLocalPhone className="text-xl text-gradient-violet" />
          Phone Number
        </label>
        <input
          type="text"
          value={userInfo.phoneNumber}
          onChange={(e) => {
            setUserInfo({ ...userInfo, phoneNumber: e.target.value });
          }}
          className={`px-4 py-3 rounded-2xl border w-full focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white dark:bg-dark-input text-gray-700 dark:text-gray-200 ${
            errors.phoneNumber
              ? "border-light-destructive dark:border-light-destructive"
              : "border-gray-200 dark:border-gray-600"
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="min-w-0">
        <label
          htmlFor="title"
          className="flex gap-2 text-gray-700 mb-2 dark:text-white"
        >
          <LuCreditCard className="text-xl text-gradient-violet " />
          Passport Number
        </label>
        <input
          type="text"
          value={userInfo.passportNumber}
          onChange={(e) => {
            setUserInfo({ ...userInfo, passportNumber: e.target.value });
          }}
          className={`px-4 py-3 rounded-2xl border w-full focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white dark:bg-dark-input text-gray-700 dark:text-gray-200 ${
            errors.passportNumber
              ? "border-light-destructive dark:border-light-destructive"
              : "border-gray-200 dark:border-gray-600"
          }`}
        />
        {errors.passportNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.passportNumber}</p>
        )}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
        <h3 className="text-sm font-semibold  text-blue-900 dark:text-blue-300 mb-2">
          Important Travel Information
        </h3>
        <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-400 space-y-1">
          <li>Ensure your passport is valid for at least 6 months</li>
          <li>Check visa requirements for your destination</li>
          <li>Arrive at the airport at least 3 hours before departure</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-gradient-violet text-gradient-violet hover:bg-gradient-violet hover:text-white transition-all duration-400">
          Back
        </button>
        <button
          onClick={validateInputs}
          className="w-full sm:flex-1 px-8 py-3 rounded-full bg-gradient-to-r from-gradient-violet to-gradient-peach text-white hover:shadow-2xl transition-all"
        >
          Continue to payment
        </button>
      </div>
    </div>
  );
};

export default PassengerInfo;
