import React from "react";
import { reduxForm, Field } from "redux-form";
import Styles from './AddPartner.module.css'


function renderField  ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) {
  console.log(input);
  return (
    <div className = {`${Styles.input}`}>
      <label>
        {label} <br /><input {...input} placeholder={placeholder} type={type} />
      </label>
      {touched && error && <span>{error}</span>}
    </div>
  );
};


const AddSponsor = (props) => {
  const categories = [
    'highlighted',
    'exchanges',
    'mining',
    'wallets',
    'defi',
    'legal',
    'collectables',
    'shop',
    'charity',
  ]
  const renderCategorySelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Select a category...</option>
        {categories.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

  const handleSubmit = (values) => {
  alert(JSON.stringify(values))
    fetch(
      `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/partners/${values.category}/${values.name}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .then((data) => alert(JSON.stringify(data)))
      .catch((err) => alert(JSON.stringify(err)));
  };
   const renderError = ({ meta: { touched, error } }) => {
    return <div>{touched && error && <span>{error}</span>}</div>;
  };
  return (
    <form className={`${Styles.form}`} onSubmit={props.handleSubmit(handleSubmit)}>
      <div>
        <label>choose a category</label>
        <Field name="category" component={renderCategorySelector} />
      </div>
      <Field
        name=""
        type="text"
        label="comany name: "
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
     
      <div>
        <label>short Description: </label><br />
        <Field
          component="textarea"
          name="shortDescription"
          placeholder="enter the short Description: "
          rows = '6'
          
        />
        <Field name="shortDescription" component={renderError} />
      </div>
      <div>
        <label>Long Description: </label><br />
        <Field
          component="textarea"
          name="fullDescription"
          placeholder="enter the full Description: "
          rows = '6'
          
        />
        <Field name="fullDescription" component={renderError} />
      </div>
      <Field
        component={renderField}
        type="text"
        label="link: "
        placeholder="enter a link"
        name="link"
      />
      <Field 
        component = {renderField}
        type = 'text'
        placeholder = 'website text goes here...'
        label = 'website'
        name = 'website'
        />
        <Field 
        component = {renderField}
        type = 'text'
        placeholder = 'logo name in S3 goes here...'
        label = 'logo: '
        name = 'logo'
        />
      <input type = 'submit' />
    </form>
  );
};
const validate = (values) => {
  const errors = {};
  if (!values.category) {
    errors.category = 'required'
  }
  return errors
}

export default reduxForm({
  form: "addSponsor",
  validate
})(AddSponsor);
