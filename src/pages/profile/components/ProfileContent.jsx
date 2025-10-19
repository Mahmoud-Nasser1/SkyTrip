import MyTrips from "./sections/MyTrips";
import SavedFlights from "./sections/SavedFlights";
import ProfileInfo from "./sections/ProfileInfo";
import Settings from "./sections/Settings";
import Payments from "./sections/Payments";

const ProfileContent = ({ activeTab, user }) => {
  return (
    <div className="bg-white shadow-md rounded-3xl p-6">
      {activeTab === "info" && <ProfileInfo user={user} />}
      {activeTab === "trips" && <MyTrips />}
      {activeTab === "flights" && <SavedFlights />}
      {activeTab === "payments" && <Payments />}
      {activeTab === "settings" && <Settings />}
    </div>
  );
};

export default ProfileContent;
