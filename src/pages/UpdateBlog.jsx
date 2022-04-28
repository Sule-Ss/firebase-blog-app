import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/newblog.css";
import { useBlogContext } from "../contexts/BlogContext";
import { EditUser } from "../utils/firebaseUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";

const UpdateBlog = () => {
  const { info, setInfo, date, time } = useBlogContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data

  console.log(currentUser);

  console.log(info)

  const handleChange = (e) => {
    e.preventDefault();
    const { name, defaultValue, value } = e.target;
    setInfo({ ...info, [name]: (value ? value : defaultValue), date: date + time, id:data.id, user:data.user });
    // setCurrentUser({...currentUser})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditUser(info);
    // editten sonra new blog value larını temizlemek için : 
    setInfo({ ...info, title: "", imgUrl: "", content: "", date: "" });
    navigate(`/`);
  };

  useEffect(() => {
    //defaultvalue ları value değerine atamak için : 
  setInfo({...info, title: data?.title, imgUrl: data?.imgUrl, content: data?.content})
  }, [])
  

  return (
    <div className="newblogContainer">
      <img src={blogLogo} alt="blog-logo" className="blogLogo" />
      <h1>── New Blog ──</h1>

      <form action="" onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue={data?.title}
          name="title"
          onChange={(e)=>handleChange(e)}
        />

        <TextField
          required
          id="outlined-required"
          label="Image URL"
          defaultValue={data?.imgUrl}
          name="imgUrl"
          type="url"
          onChange={handleChange}
        />

        <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={10}
          defaultValue={data?.content}
          required
          name="content"
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
