import NotFound from "../pages/notFound/NotFound";
import { useUser } from "./UserContext";

const ProtectRoute = ({ children, allowedRole }) => {
  const { user, isLogged } = useUser();

  if (!isLogged) {
    return <NotFound />;
  }

  if (user?.role !== allowedRole) {
    return <NotFound />;
  }

  return children;
};

export default ProtectRoute;
