// @flow
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Account.css';
//import routes from '../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Account extends React.Component {

  render() {
    return (
      <div className="container">
        <div>{this.props.public_key}</div>
        <div className="copy_icon"><FontAwesomeIcon icon="copy" /></div>
        <div>{this.props.balance}</div>
        <div className="action_icons"><FontAwesomeIcon icon="ellipsis-h" /></div>
      </div>
      );
    }
  }

export default Account