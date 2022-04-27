import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRouter2() {
    const {currentUser} = useContext(AuthContext);
    let location = useLocation();
    if (!currentUser) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  }

  export default PrivateRouter2;