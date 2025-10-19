import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { CameraIcon } from "@heroicons/react/24/solid";

const ProfileHeader = ({ user: { name, email, year, tripsCompleted } }) => {
  return (
    <div>
      <Card className="rounded-3xl shadow-lg mb-8 border-0">
        <CardBody className="p-7">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-main flex items-center justify-center text-white text-3xl  hover:bg-white">
                JD
              </div>

              <IconButton
                size="sm"
                className="!absolute  bottom-0 right-0 rounded-full bg-white border-gray-200"
              >
                <CameraIcon className="w-4 h-4  text-purple-400 " />
              </IconButton>
            </div>

            <div className="flex-1 text-center md:text-left">
              <Typography variant="h4" className="mb-2 text-light-primary">
                {name}
              </Typography>
              <Typography variant="small" className="mb-3 text-gray-600">
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
