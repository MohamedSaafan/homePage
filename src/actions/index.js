import {
  FETCH_POSTS,
  SAVE_CURRENT_USER,
  SAVE_USER_ATTRIBUTES,
  SAVE_ERROR,
  SIGN_OUT,
  SIGN_UP,
  SAVE_ADMIN,
  FETCH_POST,
  
} from "./actionTypes";
import UserPool from "../components/UserPool";

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";


let authenticatedUser;
const compareDates = (date1,date2) => {
  const year1 = +date1.slice(0,4);
  const year2 = +date2.slice(0,4);
  const month1 = +date1.slice(5,7)
  const month2 = +date2.slice(5,7)
  const day1 = +date1.slice(8,10);
  const day2 = +date2.slice(8,10);
  const hour1 = +date1.slice(11,13);
  const hour2 = +date2.slice(11,13);
  const minuite1 = +date1.slice(14,16);
  const minuite2 = +date2.slice(14,16);
  const second1 = +date1.slice(17,19);
  const second2 = +date2.slice(17,19)
  if(year1>year2){
    return 1
    
  }
  else if(year1<year2){
    return -1;
  }
  else if(year1 === year2){
    if(month1>month2){
      return 1
    }
    else if(month1 < month2){
      return -1;
    }
    else if (month1 === month2){
      if(day1 > day2){
        return 1;
      }
      else if (day1 < day2){
        return -1;
      }
      else if (day1 === day2){
        if( hour1 > hour2){
          return 1;
        }
        else if (hour1 < hour2){
          return -1;
        }
        else if (hour1 === hour2){
          if (minuite1> minuite2){
            return 1;
          }
          else if (minuite1 < minuite2){
            return -1;
          }
          else if (minuite1 === minuite2){
              if(second1 > second2){
                return 1;
              }
              else if (second1 < second2){
                return -1;
              }
              else if(second1 === second2) {
                return 0
              }
          }
        }
      }
    }
  }
}

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch(
    "https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/posts"
  );
  const data = await response.json();
  let mappedData = [];
  for(let item of data.Items){
    mappedData.push({
      heading:item.heading.S,
      description:item.description.S,
      body:item.body.S,
      id:item.postID.S,
      author:item.author.S,
      date:item.date.S
    })
  }
  mappedData.sort(function compare(a, b) {
   
   return compareDates(b.date,a.date)
  });

  dispatch({ type: FETCH_POSTS, payload:mappedData  });
};
export const addPost = (data,callback)=> async (dispatch,getState)=> {
  data.id = getState().posts.length
  data.date = new Date().toISOString();
  fetch('https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/posts',{
      method:'POST',
      body:JSON.stringify(data)
    }).then(response => response.json()).then(data=> {
      dispatch({type:FETCH_POST,payload:data})
      callback();
    })
}
export const signUp = (name, surName, email, password) => async (
  dispatch,
  getState
) => {
  UserPool.signUp(
    email,
    password,
    [
      { Name: "name", Value: name },
      { Name: "family_name", Value: surName },
    ],
    null,
    (err, data) => {
      if (err){
        console.log(err);

        return dispatch({type:SAVE_ERROR,payload:err})
      } 
      const user = data.user;

      dispatch({ type: SIGN_UP, payload: user.getUsername() });
    }
  );
};
export const verifyCode = (code, callback) => async (dispatch, getState) => {
  const userData = {
    Username: getState().auth.email,
    Pool: UserPool,
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(code, true, (err, result) => {
    if (err) return console.log(err);
    callback();
  });
};

export const signIn = (email, password, callback) => async (
  dispatch,
  getState
) => {
  const authenticationData = {
    Username: email,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userData = {
    Username: email,
    Pool: UserPool,
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (session) => {
      authenticatedUser = cognitoUser;
      dispatch({type:SAVE_CURRENT_USER, payload:cognitoUser.getUsername()})
      cognitoUser.getUserAttributes(function (err, result) {
        if (err) {
          dispatch({type:SAVE_ERROR,payload:err})
          return;
        }
        const userAttributes = {};
        for (let i = 0; i < result.length; i++) {
          userAttributes[result[i].getName()] = result[i].getValue();
        }
        dispatch({ type: SAVE_USER_ATTRIBUTES, payload: userAttributes });
        if (userAttributes.email === 'muhammadsaafaan@gmail.com' || userAttributes.email === 'alex@altstogether.com'){
          dispatch({type:SAVE_ADMIN});
        }
        callback();
      });
    },
    onFailure: (err) => {
      dispatch({type:SAVE_ERROR, payload: err})
    },
  });
};

export const changePassword = (oldPassword, newPassword) => async (
  dispatch,
  getState
) => {
  authenticatedUser.changePassword(oldPassword, newPassword, (err, result) => {
    if (err) return console.log(err, "from error");
    console.log("password Changed!", result);
  });
};

export const signOut = ()=> (dispatch,getState) => {
  UserPool.getCurrentUser().signOut();
  dispatch({type:SIGN_OUT})
};

export const retreiveUserInfo = ()=> async (dispatch,getState) => {

  const user = UserPool.getCurrentUser();
  dispatch({ type: SAVE_CURRENT_USER, payload: user });

  if (user != null) {
    user.getSession(function(err, session) {
      if (err) {
        return dispatch({type:SAVE_ERROR, payload: err});
      }
      console.log('session validity: ' + session.isValid());
  
      // NOTE: getSession must be called to authenticate user before calling getUserAttributes
      user.getUserAttributes(function(err, attributes) {
        if (err) {
          return dispatch({type:SAVE_ERROR, payload: err})
        } else {
          const userAttributes = {};
          for (let i = 0; i < attributes.length; i++) {
            userAttributes[attributes[i].getName()] = attributes[i].getValue();
          }
          console.log(userAttributes.email, 'from retreiving info')
          if(userAttributes.email ==='muhammadsaafaan@gmail.com'){
            dispatch({type:SAVE_ADMIN})
          }
          dispatch({ type: SAVE_USER_ATTRIBUTES, payload: userAttributes });
        }
      });
    })
  }
}
