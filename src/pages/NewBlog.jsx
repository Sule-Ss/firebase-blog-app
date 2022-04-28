import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css";
import { useBlogContext } from "../contexts/BlogContext";
import { AddBlog } from "../utils/firebaseUtils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const NewBlog = () => {
  const { info,date,time, setInfo } = useBlogContext();
  let navigate = useNavigate();
  const { currentUser } = useAuthContext();

  console.log(currentUser);

  
  console.log(date, time)

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    /* burdaki name => inputa göre değişir. title, url veya content. */
    setInfo({ ...info, [name]: value, date:date+time });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(info, currentUser);
    //yeni blog eklendikten sonra inputları boşaltmak için
    setInfo({ ...info, title: "", imgUrl: "", content: "", date:""});
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
          value={info?.title}
          onChange={handleChange}
        />


        <TextField
          required
          id="outlined-required"
          label="Image URL"
          defaultValue=""
          name="imgUrl"
          value={info?.imgUrl}
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
          value={info?.content}
          onChange={handleChange}
        />
        <Button variant="contained" className="btn" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default NewBlog;
