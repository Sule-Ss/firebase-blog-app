import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogCard = () => {
  const  {info, setInfo, isLoading,setIsLoading,contactList,setContactList}  = useContext(AuthContext);
  let navigate = useNavigate();

  const [fav, setFav] = useState(0)
  const [isActive, setActive] = useState(false);

  const handleFavClick = ()=>{
    setFav(fav+1)
    setActive(!isActive);
    // console.log(fav);

  }

  return (
    <Card sx={{ maxWidth: 345 }} className="cardContainer">
      <CardMedia
        className="cardImage"
        component="img"
        height="140"
        image="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Python
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleFavClick}>
          <FavoriteIcon
            className={isActive ? "active": "favBtn"} 
          /> <span> {fav}</span>
        </Button>
        <Button size="large" className="commentBtn">
        </Button>
      </CardActions>
      {/*  <Button
              onClick={currentUser ? navigate("/details") : "user not found"}
            >
              Details
            </Button> */}
    </Card>
  );
};

export default BlogCard;
