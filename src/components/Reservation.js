import React, { Component } from 'react';
import axios from 'axios'
import logoOk from '../img/logoOk.png';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      nbticket: '',
      date: '',
      isReserved: false
    };
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  };

  submit = e => {
    e.preventDefault();
    const {...reservation} = this.state
    axios.post('http://localhost:8000/api/contact', reservation)
    .then(res =>{
      this.setState({
        isReserved: true
      })
    }).catch(event => {
      console.error(event);
    })
  };

  render() {
    return(
      <div className="Reservation">
        <h2>Reserved your ticket</h2>
        <form className="Label">
          <label forHtml="email">Email</label>
          <input type="email" name="email" id="email" onChange={this.change}/>
          <label forHtml="nbticket">Number of ticket</label>
          <input type="text" name="nbticket" id="nbticket" onChange={this.change}/>
          <label forHtml="date">Date</label>
          <input type="date" name="date" id="date" onChange={this.change}/>
          <button type="submit" value="Send" onClick={this.submit}>Reserved</button>
          {this.state.isSend ?
            <div className='okUser'>
              <div className='logo-ok'>
                <img src={logoOk} alt='logo Ok'/>
              </div>
              <p className="msg-sending">Reserved</p>
            </div> : null}
        </form>
      </div>
    );
  }
}

export default Contact;