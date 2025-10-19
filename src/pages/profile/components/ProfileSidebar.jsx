import { useNavigate } from "react-router-dom";

export const tabs = {
  info: "Profile Info",
  trips: "My Trips",
  flights: "Saved Flights",
  payments: "Payments",
  settings: "Settings",
};

const ProfileSidebar = ({ activeTab }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md rounded-3xl p-6">
      <ul className="space-y-2">
        {Object.entries(tabs).map(([tabId, label]) => (
          <li key={tabId}>
            <button
              onClick={() => navigate(`/profile/${tabId}`)}
              className={`w-full text-left px-4 py-3 rounded-2xl transition ${
                activeTab === tabId
                  ? " bg-gradient-main text-white"
                  : " text-gray-800 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
