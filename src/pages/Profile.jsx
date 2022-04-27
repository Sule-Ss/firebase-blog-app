import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import "./styles/profile.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Profile = () => {
  const { currentUser } = useAuthContext();

  useEffect(() => {
    console.log(currentUser?.email);
    console.log(currentUser?.displayName);
    console.log(currentUser.photoURL)
  }, []);

  return (
    <div className="profilContainer">
      <div>
        {/* {
          currentUser?.photoURL ? <img src={currentUser?.photoURL} alt="" /> : <AccountCircleRoundedIcon className="profileIcon" />
        } */}
        {/* <img src={currentUser?.photoURL} alt="" /> */}
        <AccountCircleRoundedIcon className="profileIcon" />
        <p>{currentUser?.displayName}</p>
        <p>{currentUser?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
