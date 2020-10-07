import {
  FETCH_POSTS,
  SAVE_USER_ATTRIBUTES,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "./actionTypes";
import UserPool from "../components/UserPool";

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";

let authenticatedUser;

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch(
    "https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/posts"
  );
  const data = await response.json();
  dispatch({ type: FETCH_POSTS, payload: data });
};

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
      if (err) return console.log(err);
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
  // storing cognitoUser for changing password
  // it is a good data to store in our store
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (session) => {
      dispatch({ type: SIGN_IN, payload: session });

      // retreiving user attributes
      authenticatedUser = cognitoUser;

      cognitoUser.getUserAttributes(function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        const userAttributes = {};
        for (let i = 0; i < result.length; i++) {
          userAttributes[result[i].getName()] = result[i].getValue();
        }

        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = "us-east-2";

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: "us-east-2:3ea1fef6-38f2-4dd5-9adb-2dc507036e7b", // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            "cognito-idp.us-east-2.amazonaws.com/us-east-2_dzwTIyza2": session
              .getIdToken()
              .getJwtToken(),
          },
        });

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        AWS.config.credentials.refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
            console.log("Successfully logged!");
          }
        });
        dispatch({ type: SAVE_USER_ATTRIBUTES, payload: userAttributes });
        callback();
      });

      // another data to be stored into our store

      // you must need to set the region here
      // stablishing a seesion
    },
    onFailure: (err) => console.log(err),
  });

  // const user = new CognitoUser({
  //   Username: email,
  //   Pool: UserPool,
  // });
  // const authDetails = new AuthenticationDetails({
  //   Username: email,
  //   Password: password,
  // });
  // user.authenticateUser(authDetails, {
  //   onSuccess: (data) => console.log("onSuccess ", data),
  //   onFailure: (err) => console.log("onFailure ", err),
  //   newPasswordRequired: (data) =>
  //     console.log("new Password Required ", data),
  // });
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

export const signOut = (props) => {
  return {
    type: SIGN_OUT,
  };
};
