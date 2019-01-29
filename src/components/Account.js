// @flow
import React, { Component } from 'react';
import '../assets/css/Account.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Account extends React.Component {

  render() {
    return (
      <li key={this.props.key} id={this.props.key} className="container">
        <div>{this.props.public_key}</div>
        <div className="copy_icon"><FontAwesomeIcon icon="copy" /></div>
        <div>{this.props.balance}</div>
        <div className="action_icons"><FontAwesomeIcon icon="ellipsis-h" /></div>
      </li>
      );
    }
  }

export default Account