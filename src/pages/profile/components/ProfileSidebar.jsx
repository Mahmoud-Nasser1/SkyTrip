import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import MyTrips from "./MyTrips";
import ProfileInfo from "./ProfileInfo";
import SavedFlights from "./SavedFlights";

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const { tabId } = useParams();

  const tabsData = [
    {
      label: "Profile Info",
      tabId: "info",
      content: <ProfileInfo />,
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
  ];

  const activeTab = tabId || "info";

  return (
    <Tabs
      value={activeTab}
      orientation="vertical"
      className="overflow-visible	grid grid-cols-1 md:grid-cols-4 gap-6 mt-6"
    >
      <TabsHeader
        className="bg-white shadow-md rounded-3xl p-6 md:col-span-1 space-y-1 dark:bg-dark-card"
        indicatorProps={{
          className: "bg-transparent  shadow-none rounded-none",
        }}
      >
        {tabsData.map(({ label, tabId }) => (
          <Tab
            key={tabId}
            value={tabId}
            onClick={() => navigate(`/profile/${tabId}`)}
            className={`w-full px-4 py-3 rounded-2xl ${
              activeTab === tabId
                ? " bg-gradient-main text-white "
                : " text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-dark-accent"
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-white shadow-md rounded-3xl p-6  md:col-span-3 dark:bg-dark-card">
        {tabsData.map(({ tabId, content }) => (
          <TabPanel key={tabId} value={tabId}>
            {content}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default ProfileSidebar;
