import React from "react";

import { connect } from "react-redux";
import { signIn } from "../../actions/index";
import { reduxForm, Field } from "redux-form";
import {Link} from 'react-router-dom'
import Styles from "./SignUp.module.css";
const SignIn = (props) => {
  const handleSubmit = ({ email, password }) => {
    props.signIn(email, password, () => {
      props.history.push("/");
    });
  };

  return (
    <div className={`${Styles.signUp} container`}>
      <form className = 'container' onSubmit={props.handleSubmit(handleSubmit)}>
        <h3>LogIn</h3>
        <label>
          Email:
          <Field
            component="input"
            type="email"
            placeholder="enter your email..."
            name="email"
          />{" "}
        </label>
        <br />
        <label>
          Password:
          <Field
            component="input"
            type="password"
            placeholder="enter your password..."
            name="password"
          />{" "}
        </label>
        <br />
        <p className = 'error'>{props.message}</p>
        <br />
        <button type="submit">login</button>
        <p>don't have an account?<Link to = '/signup'>Sign up</Link></p>
      </form>
      
    </div>
  );
};
const mapStateToProps = state => {

    if(state.auth.err){
      return{
        message: state.auth.err.message
      }
    }

}
export default connect(mapStateToProps, { signIn })(
  reduxForm({
    form: "signIn",
  })(SignIn)
);
