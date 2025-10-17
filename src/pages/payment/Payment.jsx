import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import { FaLock } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { LuLock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

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
    <main className="flex flex-col items-center ">
      <div className="flex flex-col rounded-3xl border-2 w-3/4">
        <div className="flex flex-col bg-gradient-main rounded-t-3xl p-4 text-white gap-4">
          <section className="flex items-center gap-2 ">
            <FaLock className="font-bold text-2xl" />
            <h1 className="font-bold text-2xl"> Secure Payment</h1>
          </section>
          <section>Your payment information is encrypted and secure</section>
        </div>
        <div className="container flex flex-col gap-8 mx-auto p-8 ">
          <div className="flex flex-col gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-orange-50">
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
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 flex items-center gap-2 font-medium "
              >
                <LuCreditCard className="text-xl text-gradient-violet" />
                Cardholder Name
              </Typography>
              <Input
                placeholder="e.g John Doe"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
              />

              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 mt-4 flex items-center gap-2 font-medium"
              >
                <LuCreditCard className="text-xl text-gradient-violet" />
                Card Number
              </Typography>
              <Input
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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

              <div className="mt-4 flex">
                <div className="mr-4 w-full md:w-8/12">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 flex items-center gap-2 font-medium"
                  >
                    <FaRegCalendarAlt className="text-xl text-gradient-violet" />
                    Expiration Date
                  </Typography>
                  <Input
                    placeholder="MM/YY"
                    maxLength={5}
                    pattern="\d{2}/\d{2}"
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                    className="mb-1 flex items-center gap-2 font-medium"
                  >
                    <RiLock2Line className="text-xl text-gradient-violet" />
                    CVV
                  </Typography>
                  <Input
                    placeholder="123"
                    maxLength={3}
                    pattern="\d{3}"
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300  placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
              <div className="flex flex-col bg-blue-50 rounded-2xl p-4 text-blue-800 gap-4">
                <section className="flex items-center gap-2 ">
                  <LuLock />
                  <h1> Secure Payment</h1>
                </section>
                <section>
                  Your payment is protected with 256-bit SSL encryption
                </section>
              </div>
              <Button className="mt-4 bg-gradient-main" fullWidth onClick={goToForm}>
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
