import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", file, "image.jpg");
    axios.post("http://localhost:3000", formData);
  };
  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
    // remember event.target is the input itself
  };
  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <form onSubmit={handleSubmit} className="container centered">
      <input
        name="name"
        value={name}
        onChange={handleNameInputChange}
        placeholder="type your name here"
        type="text"
      />
      <br />
      <input
        name="email"
        value={email}
        onChange={handleEmailInputChange}
        placeholder="type your email here"
        type="email"
      />
      <br />

      <input
        name="image"
        onChange={handleFileInputChange}
        type="file"
        accept="image/*"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
