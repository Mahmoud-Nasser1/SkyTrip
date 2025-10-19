import NotFound from "../notFound/NotFound";
import ProfileContent from "./components/ProfileContent";
import ProfileHeader from "./components/ProfileHeader";
import ProfileSidebar, { tabs } from "./components/ProfileSidebar";
import { useParams } from "react-router-dom";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  phoneNumber: "+1 234 567 890",
  passport: "AB1234567",
  year: 2024,
  tripsCompleted: 3,
};

const Profile = () => {
  const { tabId } = useParams();
  if (tabId && !tabs[tabId]) {
    return <NotFound />;
  }
  const activeTab = tabId || "info";

  return (
    <div className="min-h-screen bg-gray-50/50 pt-24 pb-32 px-4 lg:px-6">
      <ProfileHeader user={user} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <div className="md:col-span-1">
          <ProfileSidebar activeTab={activeTab} />
        </div>
        <div className="md:col-span-3">
          <ProfileContent activeTab={activeTab} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
