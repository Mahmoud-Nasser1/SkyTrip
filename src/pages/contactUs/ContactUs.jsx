import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export function CardWithLink({
  icon: Icon,
  title,
  description,
  bgColor,
  href,
  content,
}) {
  return (
    <Card className="mt-6 w-96 text-center">
      <CardBody>
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${bgColor}`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      
      <CardFooter className="pt-0"></CardFooter>
    </Card>
  );
}

const ContactUs = () => {
  return (
    <div>
      <div>
        <h1>Get in Touch</h1>
        <p>We're here to help with your travel needs 24/7</p>
        <div className="flex flex-wrap gap-6 justify-center text-center">
          <CardWithLink
            icon={MdOutlineEmail}
            bgColor="bg-gradient-to-r from-gradient-violet to-gradient-peach"
            title="Call Us"
            description="Available 24/7"
            href="Our Email Address"
            content="01142070488"
          />
          <CardWithLink
            icon={MdOutlineLocalPhone}
            bgColor=" bg-gradient-to-r from-gradient-sky to-gradient-violet"
            title="Booking Settings"
            description="Manage and update your booking preferences."
            href="Our Phone Number"
            content="mahmoudnasser80m@gmail.com"
          />
          <CardWithLink
            icon={FaRegMessage}
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

export default ContactUs;
