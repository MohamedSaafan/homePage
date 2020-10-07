import React from "react";

import { connect } from "react-redux";
import { signIn } from "../../actions/index";
import { reduxForm, Field } from "redux-form";
import Styles from "./SignUp.module.css";
const SignIn = (props) => {
  const handleSubmit = ({ email, password }) => {
    props.signIn(email, password, () => {
      props.history.push("/");
    });
  };

  return (
    <div className={`${Styles.signUp} container`}>
      <form onSubmit={props.handleSubmit(handleSubmit)}>
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
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default connect(null, { signIn })(
  reduxForm({
    form: "signIn",
  })(SignIn)
);
