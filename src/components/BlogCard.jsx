import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useFetch } from "../utils/firebaseUtils";

const BlogCard = () => {
  const  {info, setInfo}  = useContext(AuthContext);
  const {isLoading,blogList}=useFetch();
  let navigate = useNavigate();

  const [fav, setFav] = useState(0)
  const [isActive, setActive] = useState(false);

  const handleFavClick = ()=>{
    setFav(fav+1)
    setActive(!isActive);
  }
  
  return (
   <div>
     <h1>Cards</h1>
     {
       blogList?.lenght !== 0 ? blogList?.map((item, index)=> (
        <Card sx={{ maxWidth: 345 }} className="cardContainer" key={index}>
        //   <CardMedia
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
            <Typography variant="body2" color="text.secondary">
             {item?.content.substring(0, 200) + "..."}
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
       )): "blogList empty"
     }
   </div>
  );
};

export default BlogCard;
