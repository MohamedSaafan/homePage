
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Field,reduxForm} from 'redux-form';
import { addPost, fetchPosts } from "../actions";
import Styles from './AddPost.module.css';
import isAdmin from '../components/isAdmin';


const renderField = ({ input, placeholder,label, type, meta: { touched, error } }) => (
  <div>
    <div className = 'container'>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
      </div>
 </div>
 
);


const Form = (props) => {
  useEffect(()=>{
    props.fetchPosts()
  },[])
  const handleSubmit = (data) => {
    props.addPost(data,()=>{
      props.history.push('/blog')
    })
  }

  const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false
  return (
    // remember a date and an id
    <form onSubmit={props.handleSubmit(handleSubmit)} className={`${Styles.addPost} container`}>
    <Field type = 'text' component = {renderField} name = 'description' placeholder = 'description goes here...' label = 'Description: ' />
    <Field type = 'text' component = {renderField} name = 'heading' placeholder = 'heading goes here...' label = 'Heading: ' />
    <Field type = 'text' component = {renderField} name = 'author' placeholder = 'author here...' label = 'author: '/>
    <div className = 'container'>
      <label>Body: </label>
      <br />
      <br />
    <Field component = 'textarea' rows = '12' name = 'body' placeholder = 'body goes here...' />
    <Field name = 'body' component = {renderError}/>
    </div>
    
    <Field type = 'text' component = {renderField} name = 'image' placeholder = 'name of the image here...' label = 'image: '/>
      <button type="submit" className = {`${''} container`}>Submit</button>
    </form>
  );
};

export default connect(null,{
  fetchPosts,
  addPost
})(reduxForm({
form:'addPost'
})(isAdmin(Form)));
