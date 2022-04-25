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
import { AddBlog } from "../utils/firebaseUtils";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogCard = () => {
  const  {info, setInfo, isLoading, blogList}  = useContext(AuthContext);
  let navigate = useNavigate();

  const [fav, setFav] = useState(0)
  const [isActive, setActive] = useState(false);

  const handleFavClick = ()=>{
    setFav(fav+1)
    setActive(!isActive);
    // console.log(fav);


  }

  useEffect(() => {
    console.log("useefect blogcard");
    console.log(info);
  }, [])
  
  return (
   <div>
     <h1>Cards</h1>
     {/* <h2>{info[0]?.title}</h2> */}
    
     {
       isLoading ? blogList?.map((item, index)=> (
        <Card sx={{ maxWidth: 345 }} className="cardContainer">
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
             {item?.content}
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
       )): "sorry"
     }
   </div>
    // <Card sx={{ maxWidth: 345 }} className="cardContainer">
    //   <CardMedia
    //     className="cardImage"
    //     component="img"
    //     height="140"
    //     image={info?.imgUrl}
    //     alt="blog image"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //      {info?.title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //      {info?.content}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" onClick={handleFavClick}>
    //       <FavoriteIcon
    //         className={isActive ? "active": "favBtn"} 
    //       /> <span> {fav}</span>
    //     </Button>
    //     <Button size="large" className="commentBtn">
    //     </Button>
    //   </CardActions>
    //   {/*  <Button
    //           onClick={currentUser ? navigate("/details") : "user not found"}
    //         >
    //           Details
    //         </Button> */}
    // </Card>
  );
};

export default BlogCard;
