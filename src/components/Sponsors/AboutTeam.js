import React from "react";
import Styles from "./AboutTeam.module.css";

const AboutTeam = (props) => {
  return (
    <div className={`${Styles.aboutTeam} container`}>
      <form className="container">
        <h3>About Your Team</h3>
        <input type="text" name="companyName" placeholder="Company name" />
        <input type="email" name="email" placeholder="Email" />

        <input type="text" name="contactName" placeholder="Contact name" />
        <input type="text" name="website" placeholder="Website" />
        <textarea placeholder="Describe Your Product/Service"></textarea>
        <h3>Select all that apply :</h3>
        <div>
          {" "}
          <input
            type="checkbox"
            id="siteSponsorship"
            name="siteSponsorship"
            value="siteSponsorship"
          />
          <label htmlFor="siteSponsorship">site sponsorship </label>
          <br />
        </div>
        <div>
          <input
            type="checkbox"
            id="sponsoredContent"
            name="sponsoredContent"
            value="sponsoredContent"
          />
          <label htmlFor="sponsoredContent">sponsored Content</label>
          <br />
        </div>

        <div>
          <input
            type="checkbox"
            id="SponsoredVideo"
            name="SponsoredVideo"
            value="SponsoredVideo"
          />
          <label htmlFor="SponsoredVideo">Sponsored video</label>
          <br />
        </div>

        <div style={{ display: "none" }}>
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
            id="sponsoredCryptoCamperChallenge"
            name="sponsoredCryptoCamperChallenge"
            value="sponsoredCryptoCamperChallenge"
          />
          <label htmlFor="sponsoredCryptoCamperChallenge">
            Sponsored crypto Challenge
          </label>
          <br />
        </div>
      </form>
      <button>Submit</button>
    </div>
  );
};
export default AboutTeam;
