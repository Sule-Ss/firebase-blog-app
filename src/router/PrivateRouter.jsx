import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";

function PrivateRouter() {
  // const { currentUser } = useContext(AuthContext);
  const {currentUser} = useAuthContext();
  let location = useLocation();
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (currentUser) {
    return <Outlet />;
  }
}

export default PrivateRouter;
