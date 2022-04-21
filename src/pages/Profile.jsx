import React, { useState, useEffect } from "react";

const Profile = () => {


  return (
    <div>
    {/*   {users?.map((user) => (
        <div className="useritem" key={user.id}>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`}
            alt=""
            style={{height:"5rem"}}
          />
          {user.name}
         
        </div>
      ))} */}

      <img src="https://avatars.dicebear.com/v2/avataaars/20.svg" alt="" 
      style={{height:"5rem"}}/>
    </div>
  );
};

export default Profile;
