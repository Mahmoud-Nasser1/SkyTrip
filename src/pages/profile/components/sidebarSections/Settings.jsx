import { useState } from "react";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [promotionalOffers, setPromotionalOffers] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [showTravelHistory, setShowTravelHistory] = useState(false);

  return (
    <div>
      <h2 className="mb-6 text-gray-800">Settings</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-base  text-gray-900 mb-6">Notifications</h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <label
                className="text-base text-gray-700 cursor-pointer"
                htmlFor="emailNotifications"
              >
                Email notifications
              </label>
              <input
                id="emailNotifications"
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="w-3 h-3 text-blue-600 bg-white border-gray-300 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                className="text-base text-gray-700 cursor-pointer"
                htmlFor="smsNotifications"
              >
                SMS notifications
              </label>
              <input
                id="smsNotifications"
                type="checkbox"
                checked={smsNotifications}
                onChange={() => setSmsNotifications(!smsNotifications)}
                className="w-3 h-3 text-blue-600 bg-white border-gray-300 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                className="text-base text-gray-700 cursor-pointer"
                htmlFor="promotionalOffers"
              >
                Promotional offers
              </label>
              <input
                id="promotionalOffers"
                type="checkbox"
                checked={promotionalOffers}
                onChange={() => setPromotionalOffers(!promotionalOffers)}
                className="w-3 h-3 text-blue-600 bg-white border-gray-300 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        <div>
          <h3 className="text-base  text-gray-900 mb-6">Privacy</h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <label
                className="text-base text-gray-700 cursor-pointer"
                htmlFor="profileVisibility"
              >
                Profile visibility
              </label>
              <input
                id="profileVisibility"
                type="checkbox"
                checked={profileVisibility}
                onChange={() => setProfileVisibility(!profileVisibility)}
                className="w-3 h-3 text-blue-600 bg-white border-gray-300 rounded cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <label
                className="text-base text-gray-700 cursor-pointer"
                htmlFor="showTravelHistory"
              >
                Show travel history
              </label>
              <input
                id="showTravelHistory"
                type="checkbox"
                checked={showTravelHistory}
                onChange={() => setShowTravelHistory(!showTravelHistory)}
                className="w-3 h-3 text-blue-600 bg-white border-gray-300 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
