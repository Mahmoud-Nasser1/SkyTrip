import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import { FaLock } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { LuLock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import StepperWithContent from "../booking/components/StepperWithContent";
import { CiUser } from "react-icons/ci";
import { useUser } from "../../context/UserContext";

const Payment = () => {
  const [cvv, setCvv] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");
  const navigate = useNavigate();
  const { user } = useUser();
  const goToForm = () => {
    user.role !== "user"
      ? navigate("/admin/payment/payform")
      : navigate("/payment/payform");
  };
  return (
    <main className="flex flex-col gap-6 container mx-auto p-10 py-24 dark:bg-dark-background dark:text-dark-primary">
      <div
        className="flex justify-center backdrop-blur-xl bg-white/80  rounded-3xl p-9 shadow-lg border border-white/40 hover:shadow-2xl hover:shadow-gradient-violet/30 dark:bg-dark-card 
       hover:scale-[1] hover:border-gradient-violet duration-500  dark:border-white/10"
      >
        <StepperWithContent numPage={1} />
      </div>
      <div className="flex flex-col rounded-3xl w-full transform transition-all duration-500  hover:shadow-2xl hover:shadow-gradient-violet  dark:bg-dark-card">
        <div className="flex flex-col bg-gradient-main rounded-t-3xl p-4 text-white gap-4">
          <section className="flex items-center gap-2 ">
            <FaLock className="font-bold text-2xl" />
            <h1 className="font-bold text-2xl"> Secure Payment</h1>
          </section>
          <section>Your payment information is encrypted and secure</section>
        </div>
        <div className="container flex flex-col gap-8 mx-auto p-8 ">
          <div className="flex flex-col gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50 dark:bg-gradient-to-br dark:from-[#1E2A47] dark:via-[#2B2C4E] dark:to-[#3C2F2F]">
            <h1 className="font-semibold text-lg ">Payment Summary</h1>
            <section className="flex justify-between">
              <h2>New York (JFK) → Paris (CDG)</h2>
              <h4>$599</h4>
            </section>
            <section className="flex justify-between">
              <h2>Taxes & Fees</h2>
              <h4>$90</h4>
            </section>
            <section className="flex justify-between">
              <h2>Service Charge</h2>
              <h4>$25</h4>
            </section>

            <hr className="my-3 border-t border-gray-500" />

            <section className="flex justify-between text-lg font-medium">
              <h2>Total Amount</h2>
              <h4 className="text-gradient-violet">$714</h4>
            </section>
          </div>
          <form action="">
            <div className="w-full flex flex-col gap-4 ">
              <div className="flex gap-5 flex-col md:flex-row">
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor="first-name"
                    className="flex gap-1 text-gray-700 mb-2 dark:text-white"
                  >
                    <CiUser
                      className="text-xl text-gradient-violet font-normal"
                      style={{ strokeWidth: 1.1 }}
                    />
                    First Name
                  </label>
                  <input
                    type="text"
                    value="John"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white text-gray-700 dark:border-dark-secondary
              dark:focus:border-gradient-violet
              dark:bg-dark-popover
              dark:text-dark-muted-foreground
              "
                    disabled
                  />
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
                    value="Doe"
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white text-gray-700 dark:border-dark-secondary
              dark:focus:border-gradient-violet
              dark:bg-dark-popover
              dark:text-dark-muted-foreground
              "
                    disabled
                  />
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
                  value="+1 234 567 890"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white text-gray-700 dark:border-dark-secondary
              dark:focus:border-gradient-violet
              dark:bg-dark-popover
              dark:text-dark-muted-foreground
              "
                  disabled
                />
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
                  value="AB1234567"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none bg-white text-gray-700 dark:border-dark-secondary
              dark:focus:border-gradient-violet
              dark:bg-dark-popover
              dark:text-dark-muted-foreground
              "
                  disabled
                />
              </div>
              <div className="flex flex-col bg-blue-50 rounded-2xl p-4 text-blue-800 gap-4 dark:bg-blue-gray-800 dark:text-green-300">
                <section className="flex items-center gap-2 ">
                  <LuLock />
                  <h1> Secure Payment</h1>
                </section>
                <section>
                  Your payment is protected with 256-bit SSL encryption
                </section>
              </div>
              <Button
                className="mt-4 bg-gradient-main rounded-full"
                fullWidth
                onClick={goToForm}
              >
                Confirm Data
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Payment;
