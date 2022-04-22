import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const BlogCard = () => {
  const { currentUser } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <div>
      {
        <div>
          <p>Blogcard page</p>
          <Button
            onClick={currentUser ? navigate("/details") : "user not found"}
          >
            Details
          </Button>
        </div>
      }
    </div>
  );
};

export default BlogCard;
