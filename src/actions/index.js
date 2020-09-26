import { FETCH_POSTS } from "./actionTypes";

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch(
    "https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/posts"
  );
  const data = await response.json();
  dispatch({ type: FETCH_POSTS, payload: data });
};
