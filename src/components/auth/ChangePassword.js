import React, { useState } from "react";
import { changePassword } from "../../actions";
import { connect } from "react-redux";

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changePassword(oldPassword, newPassword);
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <label>Change Your Password</label>
      <br />
      <label>Enter Your Old Password</label>
      <input
        type="text"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        placeholder="enter your old password"
      />
      <br />
      <label>Enter Your New Password</label>
      <input
        type="text"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="enter your new password"
      />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default connect(null, { changePassword })(ChangePassword);
