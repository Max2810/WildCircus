import React, { Component } from 'react';
import axios from 'axios'
import logoOk from '../img/logoOk.png';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      message: '',
      isSend: false
    };
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  };

  submit = e => {
    e.preventDefault();
    const {...msg} = this.state
    axios.post('http://localhost:8000/api/contact', msg)
    .then(res =>{
      this.setState({
        isSend: true
      })
    }).catch(event => {
      console.error(event);
    })
  };

  render() {
    return(
      <div className="Contact">
        <h2><a id="Contact_Us"></a>Contact Us</h2>
        <form className="Label">
          <label forHtml="email">Email :</label>
          <input type="email" name="email" id="email" onChange={this.change}/>
          <label forHtml="message">Message :</label>
          <textarea cols="20" rows="5" name="message" id="message" onChange={this.change}></textarea>
          <button type="submit" value="Send" onClick={this.submit}>Send</button>
          {this.state.isSend ?
            <div className='okUser'>
              <div className='logo-ok'>
                <img src={logoOk} alt='logo Ok'/>
              </div>
              <p className="msg-sending">Sending</p>
            </div> : null}
        </form>
      </div>
    );
  }
}

export default Contact;