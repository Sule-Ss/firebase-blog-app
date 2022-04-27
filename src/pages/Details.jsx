import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
// import { useBlogContext } from "../contexts/BlogContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import "./styles/datails.css";

const Details = () => {
  // const { currentUser } = useBlogContext();
  const location = useLocation();

  const data = location.state.item;

  console.log(data);

  return (
    <div className="detailsContainer">
      <Card sx={{ width: 700, margin: "3rem" }} className="cardContainer">
        <CardMedia
          className="cardImage"
          component="img"
          height="250"
          image={data?.imgUrl}
          alt="blog image"
        />
        <CardContent className="cardContent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {data?.title}
          </Typography>

          <Typography value={data.date}>
            {data.date}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data?.content}
          </Typography>
          <Typography color="darkblue" marginTop="1rem">
            {data.user}
          </Typography>
        </CardContent>
        <CardActions sx={{ borderRadius: "50%" }}>
          <FavoriteIcon
            className={data.likes > 0 ? "active" : "favBtn"}
            sx={{ cursor: "pointer", marginRight: "5px" }}
          />
          <span> {data.likes}</span>

          <ModeCommentOutlinedIcon sx={{ cursor: "pointer" }} />
          <span> {data.likes}</span>
        </CardActions>
        {/* <Button
                  onClick={currentUser ? navigate("/details") : "user not found"}
                >
                  Details
                </Button> */}
      </Card>
    </div>
  );
};

export default Details;
