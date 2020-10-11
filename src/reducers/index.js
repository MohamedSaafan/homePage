import { combineReducers } from "redux";
import postsReducer from "./posts";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  guides: () => "dummy data",
  form: formReducer,
});