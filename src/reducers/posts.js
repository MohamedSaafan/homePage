import { FETCH_POST, FETCH_POSTS } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
      case FETCH_POST :
        let newArr = [...state];
        newArr.unshift(action.payload);
        return newArr;
    default:
      return state;
  }
};
