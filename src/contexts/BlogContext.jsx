import { createContext, useEffect, useState } from "react";
import { userObserver } from "../utils/firebaseUtils";
export const BlogContext = createContext();

const initialValues={title:"",imgUrl:"",content:"NO INFO"}

const BlogContextProvider = ({children}) => {
    const [info, setInfo] = useState();

    useEffect(() => {
     userObserver(setInfo);
    }, [])
    
  return (
    <BlogContext.Provider value={{info, setInfo}}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
