import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

import { IoLocationOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";

const FlightSummery = () => {
  return (
    <div className="flex flex-col shadow-xl p-12 rounded-3xl gap-6 dark:bg-dark-card dark:text-dark-primary">
      <h1 className="text-xl font-bold">Flight Summary</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="flex items-center gap-4">
          <section>
            <GiCommercialAirplane className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Airline</h1>
            <h1>SkyWings Airlines</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <IoLocationOutline className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Departure</h1>
            <h1>08:00 AM - New York (JFK)</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <GiCommercialAirplane className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Flight Number</h1>
            <h1>123</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <IoLocationOutline className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Arrival</h1>
            <h1>10:30 PM - Paris (CDG)</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <IoTimeOutline className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Duration</h1>
            <h1>8h 30m</h1>
          </section>
        </div>
        <div className="flex items-center gap-4">
          <section>
            <LuShield className="text-3xl text-gradient-violet" />
          </section>
          <section>
            <h1 className="text-gray-600 dark:text-gray-500">Class</h1>
            <h1>Economy</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FlightSummery;
