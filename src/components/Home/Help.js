import React from "react";
import MailIcon from "./../../assets/icons/mail.svg";
import PhoneIcon from "./../../assets/icons/phone.svg";

export default function Help() {
  return (
    <>
      <div className="help">
        <h4>happy to help</h4>
        <h3>having questions? get in touch!</h3>
        <p>Contact our managers for more information</p>
        <div className="help-cards">
          <div className="help-cards-card">
            <img src={MailIcon} alt="mail icon" />
            <h5>email us</h5>
            <p>info@books.in</p>
          </div>
          <div className="help-cards-card">
            <img src={PhoneIcon} alt="phone icon" />
            <h5>call us</h5>
            <p>+912647980878</p>
          </div>
        </div>
      </div>
    </>
  );
}
