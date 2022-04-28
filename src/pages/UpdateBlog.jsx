import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css";
import { useBlogContext } from "../contexts/BlogContext";
import { EditUser } from "../utils/firebaseUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const UpdateBlog = () => {
  const { info, setInfo } = useBlogContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data

  console.log(currentUser);

  const date = new Date().toLocaleDateString() + "  ";
  const time = new Date().toLocaleTimeString().slice(0, 5);
  console.log(date, time);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value, date: date + time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditUser(info, currentUser, );
    setInfo({ ...info, title: "", imgUrl: "", content: "", date: "" });
    navigate("/");
  };

  return (
    <div className="newblogContainer">
      <img src={blogLogo} alt="blog-logo" className="blogLogo" />
      <h1>── New Blog ──</h1>

      <form action="" onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
          name="title"
          value={data?.title}
          onChange={handleChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Image URL"
          defaultValue=""
          name="imgUrl"
          value={data?.imgUrl}
          type="url"
          onChange={handleChange}
        />

        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          defaultValue=""
          required
          name="content"
          value={data?.content}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className="btn"
          onClick={handleSubmit}
          type="submit"
        >
          EDIT
        </Button>
      </form>
    </div>
  );
};
export default UpdateBlog;
