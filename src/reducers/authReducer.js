import {
  
  SAVE_CURRENT_USER,
  SAVE_USER_ATTRIBUTES,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, email: action.payload };
    case SIGN_IN:
      return { ...state, session: action.payload, isSignedIn: true };
    case SAVE_USER_ATTRIBUTES:
      return { ...state, userAttributes: action.payload };
    case SIGN_OUT:
      return { isSigned: false };
      case SAVE_CURRENT_USER:
        return{...state,currentUser:action.payload}
    default:
      return state;
  }
};
