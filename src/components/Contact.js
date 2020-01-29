import React from 'react'


function Contact() {
  return(
    <div className="Contact">
        <h2><a id="Contact_Us"></a>Contact Us</h2>
        <form className="Label">
          <label forHtml="email">Email :</label>
          <input type="email" name="email" id="email"/>
          <label forHtml="message">Message :</label>
          <textarea cols="50" rows="10" name="message" id="message"></textarea>
          <input type="submit" value="Send"/>
        </form>
    </div>
  );
}

export default Contact;