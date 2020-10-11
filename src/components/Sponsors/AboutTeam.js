import React, { useRef } from "react";
import Styles from "./AboutTeam.module.css";
import emailjs from "emailjs-com";
import { Field, reduxForm } from "redux-form";
import { init } from "emailjs-com";
init("user_v8KxWf5l7dstwDiv4Xseh");

const validate = (values) => {
  const errors = {};
  if (!values.companyName) {
    errors.companyName = "Required";
  }
  if (!values.website) {
    errors.website = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 20) {
    errors.description = "description must be greater than 20 character";
  } else if (values.description.length > 200) {
    errors.description = "description must be less than 200 character";
  }
  if (!values.contactName) {
    errors.contactName = "Required";
  }
  return errors;
};
const renderInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
const AboutTeam = (props) => {
  const formEl = useRef(null);


  const sendEmail = () => {
    emailjs
      .sendForm(
        "default_service",
        "alts_sponsors",
        formEl.current,
        "user_v8KxWf5l7dstwDiv4Xseh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    formEl.current.reset();
  };
  const handleSubmit = (values) => {
    console.log(values, "values from submition");
    const error = validate(values);

    if (error.website || error.email || error.contactName) {
      console.log(error);
    } else {
      const formData = new FormData();
      formData.append("companyName", values.companyName);
      formData.append("email", values.email);
      formData.append("website", values.website);
      formData.append("description", values.description);
      formData.append("contactName", values.contactName);
      formData.append("siteSponsorship", values.siteSponsorship);
      formData.append("sponsoredContent", values.sponsoredContent);
      formData.append("sponsoredVideo", values.sponsoredVideo);

      sendEmail(formData);
    }
  };

  const renderError = ({ meta: { touched, error } }) => {
    return <div>{touched && error && <span>{error}</span>}</div>;
  };
  return (
    <div className={`${Styles.aboutTeam} container`}>
      <form
        className="container"
        onSubmit={props.handleSubmit(handleSubmit)}
        ref={formEl}
      >
        <h3>About Your Team</h3>
        <Field
          type="text"
          name="companyName"
          label="Company name"
          component={renderInput}
        />
        <Field
          type="email"
          name="email"
          label="Email"
          component={renderInput}
        />
        <Field
          type="text"
          name="contactName"
          label="Contact Name"
          component={renderInput}
        />
        <Field
          type="text"
          name="website"
          label="Website"
          component={renderInput}
        />

        <Field
          component="textarea"
          placeholder="Describe Your Product/Service"
          name="description"
        />
        <Field component={renderError} name="description" />
        <h3>Select all that apply :</h3>

        <div className={Styles.checkBox}>
          {" "}
          <Field
            component="input"
            type="checkbox"
            id="siteSponsorship"
            name="siteSponsorship"
            value="siteSponsorship"
          />
          <label htmlFor="siteSponsorship">site sponsorship </label>
          <br />
        </div>
        <div className={Styles.checkBox}>
          <Field
            component="input"
            type="checkbox"
            id="sponsoredContent"
            name="sponsoredContent"
            value="sponsoredContent"
          />
          <label htmlFor="sponsoredContent">sponsored Content</label>
          <br />
        </div>

        <div>
          <Field
            component="input"
            type="checkbox"
            id="SponsoredVideo"
            name="SponsoredVideo"
            value="SponsoredVideo"
          />
          <label htmlFor="SponsoredVideo">Sponsored video</label>
          <br />
        </div>

        <div style={{ display: "none" }}>
          <Field
            component="input"
            type="checkbox"
            id="sponsoredEmail"
            name="sponsoredEmail"
            value="sponsoredEmail"
          />
          <label htmlFor="sponsoredEmail">Sponsored Email</label>
          <br />
        </div>

        <div className={Styles.checkBox}>
          <Field
            component="input"
            type="checkbox"
            id="sponsoredCryptoCamperChallenge"
            name="sponsoredCryptoCamperChallenge"
            value="sponsoredCryptoCamperChallenge"
          />
          <label htmlFor="sponsoredCryptoCamperChallenge">
            Sponsored crypto Challenge
          </label>
          <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
// const Form = reduxForm({ form: "sponsors" });
// export default Form(AboutTeam);
// same as
export default reduxForm({
  form: "sponsors",
  destroyOnUnmount: false, // <------ preserve form data

  validate,
})(AboutTeam);
