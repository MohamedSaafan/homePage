import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, verifyCode, signIn } from "../../actions/index";
import { reduxForm, Field } from "redux-form";
import Styles from "./SignUp.module.css";
const SignUp = (props) => {
  const handleSubmit = ({ firstName, surName, email, password }) => {
    props.signUp(firstName, surName, email, password);
  };
  const renderSingUpForm = () => {
    return (
      <form className="container" onSubmit={props.handleSubmit(handleSubmit)}>
        <h3>Join Us</h3>

        <br />
        <br />
        <label>
          First Name:{" "}
          <Field
            component="input"
            name="firstName"
            type="text"
            placeholder="enter your first name..."
          />
        </label>
        <br />
        <br />
        <label>
          Surname:{" "}
          <Field
            component="input"
            name="surName"
            type="text"
            placeholder="enter your surname..."
          />
        </label>
        <br />
        <br />
        <label>
          Email:{" "}
          <Field
            component="input"
            name="email"
            type="email"
            placeholder="enter your email..."
          />
        </label>
        <br />
        <br />
        <label>
          Password:{" "}
          <Field
            component="input"
            name="password"
            type="text"
            placeholder="enter your password..."
          />
        </label>

        <br />
        <br />
        <p className = {`${Styles.error}`}>{props.message}</p>
        <br /> 
        <br />
        <button type="submit">Sign Up</button>
        
      </form>
    );
  };
  const handleConfimationSubmition = ({ confirm, email, password }) => {
    props.verifyCode(confirm, () => {
      props.signIn(email, password, () => {
        props.history.push("/");
      });
    });
  };
  const renderConfirmationForm = () => {
    return (
      <form onSubmit={props.handleSubmit(handleConfimationSubmition)}>
        <h3>On the Way</h3>
        <label>
          Confirmation Code: <br />
          <Field
            component="input"
            type="text"
            placeholder="enter your code..."
            name="confirm"
          />{" "}
        </label>
        <br />
        <p className = {`${Styles.error}`}>{props.message}</p>
        <br />
        <button type="submit">Verify</button>
      </form>
    );
  };

  return (
    <div className={`${Styles.signUp} container`}>
      {props.email ? renderConfirmationForm() : renderSingUpForm()}
      <div className={`container`}>
        <Link to="/signin">already have an account?</Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  if(state.auth.err){
    return{
      message: state.auth.err.message
    }
  }
  return {
    email: state.auth.email,
  };
};
export default connect(mapStateToProps, { signUp, verifyCode, signIn })(
  reduxForm({
    form: "signup",
  })(SignUp)
);
