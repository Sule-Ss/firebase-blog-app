import { combineReducers } from "redux";
import appReducer from "./appReducer"
// import {authReducer} from "./authReducer"
// import {blogReducer} from "./blogReducer"

/* ana reducer ismi optional */
const rootReducer = combineReducers({
    app :appReducer,
    // auth: authReducer,
    // blog: blogReducer,
  });
  export default rootReducer;