import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { LuShield } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

const FlightCard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const goBooking = () => {
    if (user.role !== "user") {
      navigate("/admin/booking");
    } else {
      navigate("/booking");
    }
  };
  return (
    <div className="flex justify-stretch lg:justify-center ">
      <Card className="mt-6 w-full lg:w-96 shadow-xl dark:bg-dark-card dark:text-dark-primary">
        <CardBody>
          <div className="flex flex-col gap-4 p-4 rounded-3xl ">
            <h1 className="font-semibold text-lg ">Price Breakdown</h1>
            <section className="flex justify-between">
              <h2>Base Fare</h2>
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

            <section className="flex justify-between text-lg font-semibold">
              <h2>Total </h2>
              <h4 className="text-gradient-violet">$714</h4>
            </section>
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex flex-col justify-center gap-4">
          <Button
            onClick={goBooking}
            className="bg-gradient-main rounded-3xl flex justify-center items-center gap-4"
          >
            Proceed to Booking
            <FaArrowRight />
          </Button>
          <div className="flex flex-col bg-green-50 rounded-2xl p-4 text-green-800 gap-4  dark:bg-gradient-to-r dark:from-[#1E2A47] dark:via-[#2B2C4E] dark:to-[#3C2F2F] dark:text-green-300">
            <section className="flex items-center gap-2 ">
              <LuShield />
              <h1> Secure Booking</h1>
            </section>
            <section>Your payment is protected with 256-bit encryption</section>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FlightCard;
