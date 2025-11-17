import NotFound from "../notFound/NotFound";
import ProfileHeader from "./components/ProfileHeader";
import ProfileSidebar from "./components/ProfileSidebar";
import { useParams } from "react-router-dom";
import Loading from "./../../components/loading/Loading";
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import useFetch from "./../../hooks/useFetch";

const Profile = () => {
  const { tabId } = useParams();
  const { user, updateUser } = useUser();

  const userId = user?.id;

  const { data, loading } = useFetch(
    userId
      ? `https://sky-trip-back-end.vercel.app/api/v1/users/${userId}`
      : null
  );

  useEffect(() => {
    if (data) {
      updateUser(data);
    }
  }, [data]);

  const validTabs = ["info", "trips", "flights", "payments"];

  if (loading) return <Loading />;
  if (tabId && !validTabs.includes(tabId)) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-50/50 pt-24 pb-24 px-4 lg:px-6 dark:bg-dark-background">
      <ProfileHeader />
      <ProfileSidebar />
    </div>
  );
};

export default Profile;
