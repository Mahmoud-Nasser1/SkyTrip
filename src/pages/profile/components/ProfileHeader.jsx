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
  Avatar,
} from "@material-tailwind/react";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const ProfileHeader = ({
  user: { firstName, lastName, email, year, tripsCompleted },
}) => {
  const [avatar, setAvatar] = useState(null);
  const fileInput = useRef(null);

  const initials = `${firstName?.[0] || ""}${
    lastName?.[0] || ""
  }`.toUpperCase();

  const handleFileChange = (e) => {
    const file = e.target.files;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file[0]);
    }
  };

  const handleRemoveImage = () => {
    setAvatar(null);
    fileInput.current.value = null;
  };

  return (
    <div>
      <Card className="rounded-3xl shadow-lg mb-8 border-0 dark:bg-dark-card">
        <CardBody className="p-7">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-main flex items-center justify-center text-white text-3xl">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInput}
                className="hidden"
                onChange={handleFileChange}
              />
              <Menu placement="bottom-end">
                <MenuHandler>
                  <IconButton
                    size="sm"
                    className="!absolute  bottom-0 right-0 rounded-full bg-white border-gray-200"
                  >
                    <CameraIcon className="w-4 h-4  text-purple-400 " />
                  </IconButton>
                </MenuHandler>

                <MenuList className="p-1 text-sm dark:bg-dark-muted">
                  {avatar ? (
                    <div>
                      <MenuItem onClick={() => fileInput.current.click()}>
                        Replace Image
                      </MenuItem>
                      <MenuItem
                        onClick={handleRemoveImage}
                        className="text-red-500 hover:bg-red-100"
                      >
                        Remove Image
                      </MenuItem>
                    </div>
                  ) : (
                    <MenuItem onClick={() => fileInput.current.click()}>
                      Upload Image
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
                {`${firstName} ${lastName}`}
              </Typography>
              <Typography
                variant="small"
                className="mb-3 text-gray-600 dark:text-white"
              >
                {email}
              </Typography>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Chip
                  value={`Member since ${year}`}
                  className="px-4 py-2 text-base bg-blue-100  text-purple-400 rounded-full normal-case font-normal"
                />
                <Chip
                  value={`${tripsCompleted} Trips Completed`}
                  className="px-4 py-2 text-base bg-orange-100 text-purple-400 rounded-full normal-case font-normal"
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
