import { createContext, useContext, useState } from "react";

export const BlogContext = createContext();

const initialValues = { title: "", imgUrl: "", content: "" };

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
