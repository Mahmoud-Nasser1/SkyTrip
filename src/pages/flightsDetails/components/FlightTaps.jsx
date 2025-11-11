import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { GoInfo } from "react-icons/go";
import { BsLuggage } from "react-icons/bs";
import { FaBan } from "react-icons/fa";
import { MdOutlineLuggage } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";

const FlightTaps = () => {
  const data = [
    {
      label: "Overview",
      value: "overview",
      icon: GoInfo,
      content: (
        <div className="p-6 flex flex-col gap-6 ">
          {[
            [
              "In-Flight Entertainment",
              "Personal screens with movies, TV shows, and music",
            ],
            ["WiFi Available", "High-speed internet throughout the flight"],
            ["Meals Included", "Complimentary meals and beverages"],
            ["Extra Legroom", "Comfortable seating with ample space"],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-1">
              <span className="flex items-center gap-3">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />
                <h2 className="text-lg text-black font-semibold dark:text-dark-primary">{title}</h2>
              </span>
              <p className="text-gray-600 ps-9">{desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Baggage",
      value: "baggage",
      icon: BsLuggage,
      content: (
        <div className="p-6 flex flex-col gap-6">
          {[
            ["Carry-On Baggage", "1 piece up to 7kg (15 lbs)"],
            ["Checked Baggage", "2 pieces up to 23kg (50 lbs) each"],
            ["Additional Baggage", "$50 per extra bag up to 23kg"],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-1">
              <span className="flex items-center gap-3">
                <MdOutlineLuggage className="text-2xl text-purple-600" />
                <h2 className="text-lg text-black font-semibold dark:text-dark-primary">{title}</h2>
              </span>
              <p className="text-gray-600 ps-9">{desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: "Cancellation",
      value: "cancellation",
      icon: FaBan,
      content: (
        <div className="p-6 flex flex-col gap-6">
          {[
            [
              "24 Hours Before Departure",
              "Full refund minus $50 processing fee",
            ],
            ["Less Than 24 Hours", "50% refund of ticket price"],
            ["No Show", "No refund available"],
          ].map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-1">
              <span className="flex items-center gap-3">
                <FaRegCircleXmark className="text-xl text-red-600" />
                <h2 className="text-lg text-black font-semibold dark:text-dark-primary">{title}</h2>
              </span>
              <p className="text-gray-600 ps-9">{desc}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-3xl bg-white shadow-2xl w-full mx-auto p-0 overflow-hidden dark:bg-dark-card dark:text-dark-primary">
      <Tabs value="overview" className="w-full">
        <TabsHeader
          className="bg-gray-100 border-b border-gray-200"
          indicatorProps={{
            className: "bg-gradient-main rounded-t-3xl shadow-md",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className="py-3 px-6 text-lg  transition-all duration-300 font-bold text-gray-800"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="">
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value} className="py-4">
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default FlightTaps;
