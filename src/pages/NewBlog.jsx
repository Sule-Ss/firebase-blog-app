import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css"

const NewBlog = () => {
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
        />

        <TextField
          required
          id="outlined-required"
          label="Image URL"
          defaultValue=""
        />

        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          defaultValue=""
          required
        />

        <Button variant="contained" className="btn">
          Login
        </Button>
      </form>
    </div>
  );
};

export default NewBlog;
