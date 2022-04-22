import { createContext, useEffect, useState } from "react";
import { userObserver } from "../utils/firebaseUtils";
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
    //usser signin signout olduğunda takip eden fonk.
     userObserver(setCurrentUser);
    }, [])
    
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
