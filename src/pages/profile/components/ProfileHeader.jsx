import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Chip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { CameraIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useUser } from "../../../context/UserContext";
import Loading from "../../../components/loading/Loading";

const ProfileHeader = () => {
  const { user, updateUser, token } = useUser();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const initials = (
    (user?.firstName.charAt(0) || "") + (user?.lastName.charAt(0) || "")
  ).toUpperCase();

  const handleFileChange = (e) => {
    setError("");
    const file = e.target.files[0];

    setLoading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64String = reader.result;

        const res = await fetch(
          "https://sky-trip-back-end.vercel.app/api/v1/users/me",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ image: base64String }),
          }
        );

        const data = await res.json();
        updateUser(data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to upload image, try agian");
      }
      setLoading(false);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleRemoveImage = async () => {
    setError("");
    try {
      const res = await fetch(
        `https://sky-trip-back-end.vercel.app/api/v1/users/me`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ image: "" }),
        }
      );
      const data = await res.json();

      updateUser(data.data);
    } catch (err) {
      setError("Failed to remove image");
    }
    setLoading(false);
  };

  if (!user) return <Loading />;

  return (
    <div>
      <Card className="rounded-3xl shadow-lg mb-8 border-0 dark:bg-dark-card">
        <CardBody className="p-7">
          {error && (
            <div className="flex items-center gap-2 p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-500/10">
              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              <Typography color="red" className=" dark:text-red-400">
                {error}
              </Typography>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-main flex items-center justify-center text-white text-3xl">
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm animate-pulse">
                    Uploading...
                  </div>
                ) : user.image ? (
                  <img
                    src={user.image}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>

              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <Menu placement="bottom-end">
                <MenuHandler>
                  <IconButton
                    size="sm"
                    className="!absolute bottom-0 right-0 rounded-full bg-white border-gray-200"
                  >
                    <CameraIcon className="w-4 h-4 text-purple-400" />
                  </IconButton>
                </MenuHandler>

                <MenuList className="p-1 text-sm dark:bg-dark-muted">
                  {user.image ? (
                    <div>
                      <MenuItem>
                        <label
                          htmlFor="avatar-upload"
                          className="cursor-pointer w-full"
                        >
                          Replace Image
                        </label>
                      </MenuItem>
                      <MenuItem
                        onClick={handleRemoveImage}
                        className="text-red-500 hover:bg-red-100"
                      >
                        Remove Image
                      </MenuItem>
                    </div>
                  ) : (
                    <MenuItem>
                      <label
                        htmlFor="avatar-upload"
                        className="cursor-pointer w-full"
                      >
                        Upload Image
                      </label>
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            </div>

            <div className="flex-1 text-center md:text-left">
              <Typography
                variant="h4"
                className="mb-2 text-light-primary dark:text-white"
              >
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography
                variant="small"
                className="mb-3 text-gray-600 dark:text-white"
              >
                {user.email}
              </Typography>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Chip
                  value={`Member since ${new Date(
                    user.createdAt
                  ).getFullYear()}`}
                  className="px-4 py-2 text-base bg-purple-100 text-purple-400 rounded-full normal-case font-normal"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileHeader;
