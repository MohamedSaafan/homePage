import { 
  SAVE_ADMIN,
  SAVE_CURRENT_USER,
  SAVE_ERROR,
  SAVE_USER_ATTRIBUTES,
  SIGN_OUT,
  SIGN_UP,
} from "../actions/actionTypes";

export default (state = {isAdmin:false}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, email: action.payload };
    case SAVE_USER_ATTRIBUTES:
      return { ...state, userAttributes: action.payload };
    case SAVE_CURRENT_USER:
      return{...state,currentUserName:action.payload}
    case SIGN_OUT:
      return {isAdmin:false}
    case SAVE_ERROR:
      return{...state,err:action.payload}
    case SAVE_ADMIN: 
      return {...state, isAdmin:true}
    default:
      return state;
  }
};
