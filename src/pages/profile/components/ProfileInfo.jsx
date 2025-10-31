import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { Button } from "@material-tailwind/react";

const ProfileInfo = ({ user: { name, email, phoneNumber, passport } }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="mb-2 text-gray-800">Profile Information</h1>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="flex-1">
          <label className="flex gap-1 text-gray-700 mb-2">
            <CiUser
              className="text-xl text-gradient-violet font-normal "
              style={{ strokeWidth: 1.1 }}
            />
            First Name
          </label>
          <input
            type="text"
            defaultValue={name.split(" ")[0]}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
        bg-white text-gray-700"
          />
        </div>

        <div className="flex-1">
          <label className="flex gap-2 text-gray-700 mb-2">
            <CiUser
              className="text-xl text-gradient-violet"
              style={{ strokeWidth: 1.1 }}
            />
            Last Name
          </label>
          <input
            type="text"
            defaultValue={name.trim().split(" ").slice(-1)[0]}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
        bg-white text-gray-700"
          />
        </div>
      </div>

      <div>
        <label className="flex  gap-2 text-gray-700 mb-2">
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Email Address
        </label>
        <input
          type="email"
          defaultValue={email}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700"
        />
      </div>

      <div>
        <label className="flex  gap-2 text-gray-700 mb-2">
          <MdOutlineLocalPhone className="text-xl text-gradient-violet" />
          Phone Number
        </label>
        <input
          type="text"
          defaultValue={phoneNumber}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700"
        />
      </div>
      <div>
        <label className="flex  gap-2 text-gray-700 mb-2">
          <LuCreditCard className="text-xl text-gradient-violet" />
          Passport Number
        </label>
        <input
          type="text"
          defaultValue={passport}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700"
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
