import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import UserPool from './components/UserPool';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;

const user = UserPool.getCurrentUser();
if (user) {
  const initialState = {}
  let auth = {}

  const userAttributes = {};
  user.getSession(function(err, session) {
    // NOTE: getSession must be called to authenticate user before calling getUserAttributes
    user.getUserAttributes(function(err, attributes) {
      if(err) return console.log(err);
        for (let i = 0; i < attributes.length; i++) {
          userAttributes[attributes[i].getName()] = attributes[i].getValue();
        }
        console.log(userAttributes,'from user attributes')
        if(userAttributes.email === 'muhammadsaafaan@gmail.com' || userAttributes.email === 'alex@altstogether.com'){
          auth.isAdmin = true
        }
        else{
          auth.isAdmin = false
        }
        auth.userAttributes = userAttributes
        initialState.auth = auth
  
        store = createStore(
          reducers,
         initialState
          ,
          composeEnhancers(applyMiddleware(reduxThunk)));
          ReactDOM.render(
            <Provider store={store}>
              <App />
            </Provider>,
          
            document.getElementById("root")
          );
      }
    );
  })
}
else{
  store = createStore(reducers,{},composeEnhancers(applyMiddleware(reduxThunk)));
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  
    document.getElementById("root")
  );
}


  
