import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useFetch } from "../utils/firebaseUtils";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

const BlogCard = () => {
  const { currentUser } = useContext(AuthContext);

  const { info, setInfo } = useContext(AuthContext);
  const { isLoading, blogList } = useFetch();
  let navigate = useNavigate();

  const [fav, setFav] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleFavClick = () => {
    setFav(fav + 1);
    setActive(!isActive);
  };

  return (
    <div className="blogCardForm">
      {/* <h1>Cards</h1> */}
      {blogList?.lenght !== 0
        ? blogList?.map((item, index) => (
            <Card sx={{ maxWidth: 345 }} className="cardContainer" key={index}>
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                image={item?.imgUrl}
                alt="blog image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/details")}
                >
                  {item?.content.substring(0, 200) + " ..."}
                </Typography>
                <Typography color="darkblue" marginTop="1rem">{currentUser?.email}</Typography>
              </CardContent>
              <CardActions sx={{ borderRadius: "50%" }}>
                <FavoriteIcon
                  className={isActive ? "active" : "favBtn"}
                  sx={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={handleFavClick}
                />
                <span> {fav}</span>
              </CardActions>
              {/* <Button
                  onClick={currentUser ? navigate("/details") : "user not found"}
                >
                  Details
                </Button> */}
            </Card>
          ))
        : "blogList empty"}
    </div>
  );
};

export default BlogCard;
