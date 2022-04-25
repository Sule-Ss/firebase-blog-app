import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { AddBlog } from "../utils/firebaseUtils";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const { info, setInfo } = useContext(BlogContext);
  // const {  } = useContext(BlogContext);
  let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(name, value);
    /* burdaki name => inputa göre değişir. title, url veya content. */
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // (info.id)
    AddBlog(info);
    console.log("submit");
    console.log(AddBlog(info));
    console.log(info);
    console.log(info.title);
    navigate("/dashboard")
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
