import { Navigate, Outlet, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function PrivateRouter() {
  const { currentUser, setCurrentUser } = useAuthContext();

  // const[currentUserOutlet ,setCurrentUserOutlet] = useOutletContext();

  return currentUser ? <Outlet/> : <Navigate to="/login"  replace={true}/>;
  /* const navigate = useNavigate();
  let location = useLocation();
  if (!currentUser) {
    return navigate(`/login`, { state: { from: location.pathname } });
  }

  return <Outlet />; */
}

export default PrivateRouter;
