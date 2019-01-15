import Web3 from 'web3';
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3);
//var peerCount = web3.net.peerCount;
//console.log(peerCount); // 4
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
        <li className="accounts_header">
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