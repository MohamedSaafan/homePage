
import React, { useEffect,useRef } from "react";
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
  
  const fileRef = useRef(null);
  useEffect(()=>{
    props.fetchPosts()
  },[])
  const handleSubmit = async (data) => {
    const file = fileRef.current.files[0];
   
   const fileName = file.name;
   const type = file.type;
   const response = await fetch(`https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/createpresignedurl/${fileName}?filetype=${type}`);
   const presignedUrl = await response.json();
   
    fetch(presignedUrl.postURL,{
      method: 'PUT',
      body: file,
      Headers:{
        ContentType:type
      }
    }).then(res =>{
      
      if(res.statusText === "OK"){
        data.image = presignedUrl.getURL;
        props.addPost(data,()=>{
          props.history.push('/blog')
          alert('succsseded')

        })
        
      }
    }).catch(err=> alert('some thing went wrong please try again!'))
 
   
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
    <div className = 'container'>
    <input type = 'file' className = {`${Styles.inputFile}`} ref = {fileRef}  />

    </div>
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
