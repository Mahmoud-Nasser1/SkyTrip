import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { Button } from "@material-tailwind/react";

const ProfileInfo = ({
  user: { firstName, lastName, email, phoneNumber, passport },
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="mb-2 text-gray-800 dark:text-white">
        Profile Information
      </h1>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="flex-1">
          <label className="flex gap-1 text-gray-700 mb-2 dark:text-white">
            <CiUser
              className="text-xl text-gradient-violet font-normal "
              style={{ strokeWidth: 1.1 }}
            />
            First Name
          </label>
          <input
            type="text"
            defaultValue={firstName}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
        bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
          />
        </div>

        <div className="flex-1">
          <label className="flex gap-2 text-gray-700 mb-2 dark:text-white">
            <CiUser
              className="text-xl text-gradient-violet"
              style={{ strokeWidth: 1.1 }}
            />
            Last Name
          </label>
          <input
            type="text"
            defaultValue={lastName}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
        bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
          />
        </div>
      </div>

      <div>
        <label className="flex  gap-2 text-gray-700 mb-2 dark:text-white">
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Email Address
        </label>
        <input
          type="email"
          defaultValue={email}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
        />
      </div>

      <div>
        <label className="flex  gap-2 text-gray-700 mb-2 dark:text-white">
          <MdOutlineLocalPhone className="text-xl text-gradient-violet" />
          Phone Number
        </label>
        <input
          type="text"
          defaultValue={phoneNumber}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
        />
      </div>
      <div>
        <label className="flex  gap-2 text-gray-700 mb-2 dark:text-white">
          <LuCreditCard className="text-xl text-gradient-violet" />
          Passport Number
        </label>
        <input
          type="text"
          defaultValue={passport}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
        />
      </div>
      <div>
        <Button
          size="lg"
          className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-main"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
