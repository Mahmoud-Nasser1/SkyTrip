import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function CardWithLink({ Icon, title, description, bgColor, href }) {
  return (
    <Card className="mt-6 w-96 text-center transform transition-all duration-500 hover:scale-100 hover:shadow-2xl hover:shadow-gradient-violet/30 bg-white/90 backdrop-blur-sm border border-transparent hover:border-gradient-violet">
      <CardBody>
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${bgColor} hover:scale-110 hover:rotate-6 shadow-md hover:shadow-lg`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-gray-800 "
        >
          {title}
        </Typography>

        <Typography className="mt-5 text-gray-600">{description}</Typography>
      </CardBody>

      <CardFooter className="pt-0">
        <Link
          to="/home"
          className="relative text-gradient-violet font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-violet after:transition-all after:duration-300 hover:after:w-full"
        >
          {href}
        </Link>
      </CardFooter>
    </Card>
  );
}

const FirstSection = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="text-center mt-7">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help with your travel needs 24/7
          </p>
        </div>

        <div className="flex flex-wrap gap-12 justify-center text-center">
          <CardWithLink
            Icon={MdOutlineEmail}
            bgColor="bg-gradient-to-r from-gradient-violet to-gradient-peach"
            title="Call Us"
            description="Available 24/7"
            href="Our Email Address"
            content="01142070488"
          />
          <CardWithLink
            Icon={MdOutlineLocalPhone}
            bgColor=" bg-gradient-to-r from-gradient-sky to-gradient-violet"
            title="Booking Settings"
            description="Manage and update your booking preferences."
            href="Our Phone Number"
            content="mahmoudnasser80m@gmail.com"
          />
          <CardWithLink
            Icon={FaRegMessage}
            bgColor=" bg-gradient-to-r from-gradient-peach to-gradient-sky "
            title="Booking Settings"
            description="Manage and update your booking preferences."
            href="Live Chat"
            content="Start Chat"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
