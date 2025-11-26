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
  const [error, setError] = useState({});
  
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

  const phoneCheck = /^(?:\+20|0020)?01[0125][0-9]{8}$/;
  const passwordCheck =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const handleValidation = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (
      formData.firstName.length < 3 ||
      formData.firstName.includes(" ")
    ) {
      newErrors.firstName =
        "First name must be at least 3 letters, and contain no spaces.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (
      formData.lastName.length < 3 ||
      formData.lastName.includes(" ")
    ) {
      newErrors.lastName =
        "Last name must be at least 3 letters, and contain no spaces.";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneCheck.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    if (formData.password && !passwordCheck.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSave = async () => {
  if (handleValidation()){
    setSaving(true);
    setError({});
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
      setError({ fetchError: err.message});
    }
      setSaving(false); 
  }};

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

       {error && Object.keys(error).length > 0 && (
  <div className="flex flex-col gap-2 p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-500/10">
    {Object.values(error).map((message, index) => (
      <div key={index} className="flex items-center gap-2">
        <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
        <Typography color="red">{message}</Typography>
      </div>
    ))}
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
