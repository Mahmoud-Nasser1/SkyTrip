import { Routes, Route } from "react-router-dom";
import UserLayout from "./pages/layout/UserLayout";
import ProtectRoute from "./context/ProtectRoute";
import AdminnLayout from "./pages/layout/AdminnLayout";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <ProtectRoute allowedRole="admin">
              <AdminnLayout />
            </ProtectRoute>
          }
        />

        <Route path="/*" element={<UserLayout />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
