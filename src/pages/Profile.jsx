import { useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import React, { useContext } from "react";
import "./styles/profile.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser?.email);
    console.log(currentUser?.displayName);
  }, []);

  return (
    <div className="profilContainer">
      <div>
      {/* <img src={currentUser?.photoURL} alt="" /> */}
      <AccountCircleRoundedIcon className="profileIcon"/>
      <p>{currentUser?.displayName}</p>
      <p>{currentUser?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
