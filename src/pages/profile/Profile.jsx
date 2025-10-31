import NotFound from "../notFound/NotFound";
import ProfileHeader from "./components/ProfileHeader";
import ProfileSidebar from "./components/ProfileSidebar";
import { useParams } from "react-router-dom";
import MyTrips from "./components/MyTrips";
import ProfileInfo from "./components/ProfileInfo";
import SavedFlights from "./components/SavedFlights";
import AddPayment from "./components/AddPayment";

const user = {
  firstName: "John",
  lastName: "Doe",
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
  { label: "My Trips", tabId: "trips", content: <MyTrips /> },
  { label: "Saved Flights", tabId: "flights", content: <SavedFlights /> },
  { label: "Payments", tabId: "payments", content: <AddPayment /> },
];

const Profile = () => {
  const { tabId } = useParams();

  const validTab = tabsData.find((tab) => tab.tabId === tabId);
  if (tabId && !validTab) {
    return <NotFound />;
  }

  const activeTab = tabId || "info";

  return (
    <div className="bg-gray-50/50 pt-24 pb-24 px-4 lg:px-6 dark:bg-dark-background">
      <ProfileHeader user={user} />
      <ProfileSidebar activeTab={activeTab} tabsData={tabsData} />
    </div>
  );
};

export default Profile;
