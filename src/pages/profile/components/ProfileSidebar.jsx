import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = ({ activeTab, tabsData }) => {
  const navigate = useNavigate();
  return (
    <Tabs
      value={activeTab}
      orientation="vertical"
      className="overflow-visible	grid grid-cols-1 md:grid-cols-4 gap-6 mt-6"
    >
      <TabsHeader
        className="bg-white shadow-md rounded-3xl p-6 md:col-span-1 space-y-1"
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
                ? " bg-gradient-main text-white"
                : " text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-white shadow-md rounded-3xl p-6  md:col-span-3 ">
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
