import NotFound from "../notFound/NotFound";
import ProfileHeader from "./components/ProfileHeader";
import ProfileSidebar from "./components/ProfileSidebar";
import { useParams } from "react-router-dom";
import MyTrips from "./components/sidebarSections/MyTrips";
import ProfileInfo from "./components/sidebarSections/ProfileInfo";
import SavedFlights from "./components/sidebarSections/SavedFlights";
import Payments from "./components/sidebarSections/Payments";
import Settings from "./components/sidebarSections/Settings";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  phoneNumber: "+1 234 567 890",
  passport: "AB1234567",
  year: 2024,
  tripsCompleted: 3,
};

const tabsData = [
  {
    label: "Profile Info",
    tabId: "info",
    content: <ProfileInfo user={user} />,
  },
  {
    label: "My Trips",
    tabId: "trips",
    content: <MyTrips />,
  },
  {
    label: "Saved Flights",
    tabId: "flights",
    content: <SavedFlights />,
  },
  {
    label: "Payments",
    tabId: "payments",
    content: <Payments />,
  },
  {
    label: "Settings",
    tabId: "settings",
    content: <Settings />,
  },
];

const Profile = () => {
  const { tabId } = useParams();

  const validTab = tabsData.find((tab) => tab.tabId === tabId);
  if (tabId && !validTab) {
    return <NotFound />;
  }

  const activeTab = tabId || "info";

  return (
    <div className="bg-gray-50/50 pt-24 pb-24 px-4 lg:px-6">
      <ProfileHeader user={user} />
      <ProfileSidebar activeTab={activeTab} tabsData={tabsData} />
    </div>
  );
};

export default Profile;
