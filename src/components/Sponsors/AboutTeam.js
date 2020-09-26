import React from "react";
import Styles from "./AboutTeam.module.css";

const AboutTeam = (props) => {
  return (
    <div className={`${Styles.aboutTeam} container`}>
      <form className="container">
        <h3>About Your Team</h3>
        <input type="text" name="name" placeholder="Company name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea placeholder="Describe Your Product/Service"></textarea>

        <div>
          {" "}
          <input
            type="checkbox"
            id="Advertisement"
            name="Advertisement"
            value="advertisement"
          />
          <label htmlFor="Advertisement"> Advertisement</label>
          <br />
        </div>
        <div>
          <input
            type="checkbox"
            id="sponsoredTrack"
            name="sponsoredCommunityTrack"
            value="sponsoredCommunityTrack"
          />
          <label htmlFor="sponsoredTrack"> Sponsored Community Track</label>
          <br />
        </div>
        <div>
          <input
            type="checkbox"
            id="sponsoredContent"
            name="sponsoredContent"
            value="sponsoredContent"
          />
          <label htmlFor="sponsoredContent">Sponsored Content</label>
          <br />
        </div>
        <div>
          <input
            type="checkbox"
            id="sponsoredEmail"
            name="sponsoredEmail"
            value="sponsoredEmail"
          />
          <label htmlFor="sponsoredEmail">Sponsored Email</label>
          <br />
        </div>
        <div>
          <input
            type="checkbox"
            id="sponsoredWebinar"
            name="sponsoredWebinar"
            value="sponsoredWebinar"
          />
          <label htmlFor="sponsoredWebinar">Sponsored Webinar</label>
          <br />
        </div>
        <div>
          <input
            type="checkbox"
            id="partneship"
            name="partneship"
            value="partneship"
          />
          <label htmlFor="partneship">partneship</label>
          <br />
        </div>
      </form>
    </div>
  );
};
export default AboutTeam;
