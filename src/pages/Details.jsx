import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// import { useBlogContext } from "../contexts/BlogContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import "./styles/datails.css";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogContext";

const Details = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const data = location.state.item;

  const {currentUser} = useAuthContext();
  const { setInfo} = useBlogContext();

  
  const editHandler=({id,username,phoneNumber,gender})=>{
    setInfo({id,username,phoneNumber,gender})
    navigate(`/updateBlog/${id}`)
  }

  const editHandleChange = ()=>{

  }
 /*  console.log(data.user);
  console.log(currentUser.email); */

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
                {
                  currentUser.email === data?.user ?  (<div className="buttons">
                  <Button>DELETE</Button>
                  <Button onClick={()=>editHandler(
                    data.title,
                    data.imgUrl,
                    data.content
                  )}>UPDATE</Button>
                </div>) : ""
                }
       
      </Card>
    </div>
  );
};

export default Details;
