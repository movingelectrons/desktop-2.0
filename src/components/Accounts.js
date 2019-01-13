// @flow
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Accounts.css';
//import routes from '../constants/routes';
import Account from './Account.js';

class Accounts extends Component {

  render() {
    
    return (
      <ul className="accounts">
        <li className="header">
          <div>Account</div>
          <div></div>
          <div>Balance</div>
          <div className="actions">Actions</div>
        </li>
        <li><Account /></li>
        <li><Account /></li>
      </ul>
    );
        
  }
}

export default Accounts