import { createContext, useContext, useState } from "react";

export const BlogContext = createContext();
const date = new Date().toLocaleDateString() + "  " 
  const time = new Date().toLocaleTimeString().slice(0,5)

const initialValues = { title: "", imgUrl: "", content: "", date: "" };

const BlogContextProvider = ({ children }) => {
  const [info, setInfo] = useState(initialValues);

  return (
    <BlogContext.Provider value={{ info, setInfo }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
export default BlogContextProvider;
