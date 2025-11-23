import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import { useUser } from "./UserContext";

const ProtectRoute = ({ children, allowedRole }) => {
  const { user, isLogged, isLoading } = useUser();

  if (isLoading) return null;

  if (!isLogged) {
    console.log(isLogged);
    return <Navigate to="/login" replace />;
  }





  
  if (user?.role !== allowedRole) {
    return <NotFound />;
  }

  return children;
};

export default ProtectRoute;
