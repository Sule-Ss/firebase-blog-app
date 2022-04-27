import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function PrivateRouter() {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  let location = useLocation();
  if (!currentUser) {
    return navigate(`/login`, { state: { from: location.pathname } });
  } else if (currentUser) {
    return <Outlet />;
  }
}

export default PrivateRouter;
