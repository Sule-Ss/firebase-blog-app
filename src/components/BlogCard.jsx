import {
  // Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../contexts/AuthContext";
import { EditUser, useFetch } from "../utils/firebaseUtils";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import spinner from "../assests/spinner.gif"

const BlogCard = () => {
  // const { currentUser } = useAuthContext();
  const { blogList } = useFetch();
  let navigate = useNavigate();

  const handleFavClick = (item) => {
    // setFav(fav + 1);
    // setActive(!isActive);
    EditUser({ ...item, likes: item.likes + 1 });
  };

  return (
    <div className="blogCardForm">
      {blogList
        ? blogList?.map((item, index) => (
            <Card sx={{ maxWidth: 345 }} className="cardContainer" key={index}>
              <CardMedia
                className="cardImage"
                component="img"
                height="140"
                image={item?.imgUrl}
                alt="blog image"
                onClick={() =>
                  navigate(`/details/${item.id}`, { state: { item } })
                }
                sx={{ cursor: "pointer" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  onClick={() =>
                    navigate(`/details/${item.id}`, { state: { item } })
                  }
                  sx={{ cursor: "pointer" }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/details/${item.id}`, { state: { item } })
                  }
                >
                  {item?.content.substring(0, 200) + " ..."}
                </Typography>
                <Typography color="darkblue" marginTop="1rem">
                  {item.user}
                </Typography>
              </CardContent>
              <CardActions sx={{ borderRadius: "50%" }}>
                <FavoriteIcon
                  className={item.likes > 0 ? "active" : "favBtn"}
                  sx={{ cursor: "pointer", marginRight: "5px" }}
                  onClick={() => handleFavClick(item)}
                />
                <span style={{marginRight:"1rem"}}> {item.likes}</span>
                <ModeCommentOutlinedIcon
                  sx={{ cursor: "pointer"}}
                />
                <span> {item.likes}</span>
              </CardActions>
              {/* <Button
                  onClick={currentUser ? navigate("/details") : "user not found"}
                >
                  Details
                </Button> */}

            </Card>
          ))
        : <div className="spinner"><img src={spinner} alt="" /></div>}
        
    </div>
  );
};

export default BlogCard;
