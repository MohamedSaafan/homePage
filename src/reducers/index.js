import { combineReducers } from "redux";
import postsReducer from "./posts";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  posts: postsReducer,
  auth: () => "dummy data",

  guides: () => "dummy data",
  form: formReducer,
});
