import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import { FaLock } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { LuLock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import StepperWithContent from "../booking/components/StepperWithContent";

const Payment = () => {
  const [cvv, setCvv] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const [cardholderName, setCardholderName] = React.useState("");
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/payment/payform");
  };
  return (
    <main className="flex flex-col gap-6   container mx-auto  p-10 py-24 dark:bg-dark-background dark:text-dark-primary">
      <div
        className="flex justify-center backdrop-blur-xl bg-white/80  rounded-3xl p-9 shadow-lg border border-white/40 hover:shadow-2xl hover:shadow-gradient-violet/30 dark:bg-dark-card 
       hover:scale-[1] hover:border-gradient-violet duration-500  dark:border-white/10"
      >
        <StepperWithContent numPage={2} />
      </div>
      <div className="flex flex-col rounded-3xl border-2 w-11/12 sm:w-full transform transition-all duration-500  hover:shadow-2xl hover:shadow-gradient-violet  dark:bg-dark-card">
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
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-1 flex items-center gap-2 font-medium dark:text-dark-primary"
                >
                  <LuCreditCard className="text-xl text-gradient-violet " />
                  Cardholder Name
                </Typography>
                <Input
                  placeholder="e.g John Doe"
                  className="appearance-none placeholder:text-blue-gray-300 placeholder:opacity-100 transform transition-all duration-500
                     focus:outline-none focus:ring-2 focus:ring-gradient-violet focus:ring-opacity-70 dark:bg-dark-muted dark:text-dark-muted-foreground"
                  labelProps={{
                    className: "before:content-none after:content-none ",
                  }}
                  containerProps={{
                    className: "min-w-0",
                  }}
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-1 mt-4 flex items-center gap-2 font-medium dark:text-dark-primary"
                >
                  <LuCreditCard className="text-xl text-gradient-violet " />
                  Card Number
                </Typography>
                <Input
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="appearance-none placeholder:text-blue-gray-300 placeholder:opacity-100 transform transition-all duration-500
                     focus:outline-none focus:ring-2 focus:ring-gradient-violet focus:ring-opacity-70 dark:bg-dark-muted dark:text-dark-muted-foreground"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "min-w-0",
                  }}
                  value={cardNumber
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>

              <div className="mt-4 flex">
                <div className="mr-4 w-full md:w-8/12">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 flex items-center gap-2 font-medium dark:text-dark-primary"
                  >
                    <FaRegCalendarAlt className="text-xl text-gradient-violet " />
                    Expiration Date
                  </Typography>
                  <Input
                    placeholder="MM/YY"
                    maxLength={5}
                    pattern="\d{2}/\d{2}"
                    className="appearance-none placeholder:text-blue-gray-300 placeholder:opacity-100 transform transition-all duration-500
                     focus:outline-none focus:ring-2 focus:ring-gradient-violet focus:ring-opacity-70 dark:bg-dark-muted dark:text-dark-muted-foreground"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    value={expirationDate
                      .replace(/[^0-9]/g, "")
                      .replace(/(\d{2})(\d{1,2})/, "$1/$2")
                      .substring(0, 5)}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-4/12">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 flex items-center gap-2 font-medium dark:text-dark-primary"
                  >
                    <RiLock2Line className="text-xl text-gradient-violet " />
                    CVV
                  </Typography>
                  <Input
                    placeholder="123"
                    maxLength={3}
                    pattern="\d{3}"
                    className="appearance-none placeholder:text-blue-gray-300 placeholder:opacity-100 transform transition-all duration-500
                     focus:outline-none focus:ring-2 focus:ring-gradient-violet focus:ring-opacity-70 dark:bg-dark-muted dark:text-dark-muted-foreground"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                      className: "!min-w-0",
                    }}
                    value={cvv
                      .replace(/[^0-9]/g, "")
                      .replace(/(\..*)\./g, "$1")}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
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
                Pay Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Payment;
