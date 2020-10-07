import React from "react";

import { reduxForm, Field } from "redux-form";
import axios from "axios";
import Post from "./BlogPost";

const AddSponsor = (props) => {
  const renderField = ({
    input,
    label,
    placeholder,
    type,
    meta: { touched, error },
  }) => {
    console.log(input);
    return (
      <div>
        <label>
          {label} <input {...input} placeholder={placeholder} type={type} />
        </label>
        {touched && error && <span>{error}</span>}
      </div>
    );
  };

  const handleSubmit = (values) => {
    fetch(
      `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/partners/${props.match.params.name}/${values.name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .then((data) => console.log(data, "succedd "))
      .catch((err) => console.log(err, "from error of our request"));
  };
  return (
    <form className="container" onSubmit={props.handleSubmit(handleSubmit)}>
      <Field
        name="name"
        type="text"
        label="Name: "
        placeholder="enter a name"
        component={renderField}
      />
      <Field
        name="locations"
        type="text"
        label="Locations: "
        placeholder="enter a location"
        component={renderField}
      />
      <Field
        name="shortDescription"
        type="text"
        label="Short Description: "
        placeholder="enter a short description"
        component={renderField}
      />
      <div>
        <label>Long Description: </label>
        <Field
          component="textarea"
          name="fullDescription"
          placeholder="enter the full Description: "
        />
        <Field name="fullDescription" component={renderField} />
      </div>
      <Field
        component={renderField}
        type="text"
        label="Website: "
        placeholder="enter a website"
        name="website"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "addSponsor",
})(AddSponsor);
