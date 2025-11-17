import { CiUser } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import { Button, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useUser } from "../../../context/UserContext";
import Loading from "../../../components/loading/Loading";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const ProfileInfo = () => {
  const { user, token, updateUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        password: "",
      });
    }
  }, [user]);

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch(
        "https://sky-trip-back-end.vercel.app/api/v1/users/me",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();

      updateUser(data.data);
    } catch (err) {
      setError("Failed to save ");
    }
    setSaving(false);
  };

  if (!user) return <Loading />;

  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="mb-2 text-gray-800 dark:text-white">
        Profile Information
      </h1>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="flex-1">
          <label className="flex gap-2 text-gray-700 mb-2 dark:text-white">
            <CiUser
              className="text-xl text-gradient-violet font-normal "
              style={{ strokeWidth: 1.1 }}
            />
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
        bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
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
            name="lastName"
            type="text"
            value={formData.lastName}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200
        focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
        bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <label className="flex  gap-2 text-gray-700 mb-2 dark:text-white">
          <MdOutlineEmail className="text-xl text-gradient-violet" />
          Email Address
        </label>
        <input
          name="email"
          type="email"
          readOnly
          value={user.email}
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
          name="phoneNumber"
          type="text"
          value={formData.phoneNumber}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      </div>
      <div>
        <label className="flex  gap-2 text-gray-700 mb-2 dark:text-white">
          <LuCreditCard className="text-xl text-gradient-violet" />
          Password
        </label>
        <input
          name="password"
          type="password"
          value={formData.password}
          className=" px-4 py-3 rounded-2xl border border-gray-200 w-full
           focus:!border-gradient-violet focus:ring-0 focus:border-2 outline-none
             bg-white text-gray-700 dark:bg-dark-muted dark:text-white dark:border-dark-border"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-500/10">
          <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
          <Typography
            color="red"
            className="font-open-sans font-medium dark:text-red-400"
          >
            {error}
          </Typography>
        </div>
      )}

      <div>
        <Button
          size="lg"
          onClick={handleSave}
          disabled={saving}
          className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-main"
        >
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
