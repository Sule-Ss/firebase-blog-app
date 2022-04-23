import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";

const NewBlog = ({info, setInfo }) => {
  // const { info, setInfo } = useContext(BlogContext);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    /* burdaki name => inputa göre değişir. title, url veya content. */
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="newblogContainer">
      <img src={blogLogo} alt="blog-logo" className="blogLogo" />
      <h1>── New Blog ──</h1>

      <form action="">
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
          name="title"
          value={info.title}
          onChange={handleChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Image URL"
          defaultValue=""
          name="imgUrl"
          value={info.imgUrl}
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
          value={info.content}
          onChange={handleChange}
        />

        <Button variant="contained" className="btn">
          Login
        </Button>
      </form>
    </div>
  );
};

export default NewBlog;
