import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRouter() {
  const { currentUser } = useContext(AuthContext);
  let location = useLocation();
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //Outlet : children Route demek.
  return <Outlet />;
}

export default PrivateRouter;
