// @flow
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Account.css';
//import routes from '../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*
type Props = {
  id: () => void,
  encrypted_private_key: () => void,
  public_key: () => void,
  salt: () => void,
  balance: () => void
};
*/
//export default class Account extends Component<Props> {
class Account extends React.Component {
  //props: Props;

  render() {
    return (
      <div className="container">
        <div>{this.props.public_key}public key goes here</div>
        <div className="copy_icon"><FontAwesomeIcon icon="copy" /></div>
        <div>{this.props.balance}balance</div>
        <div className="action_icons"><FontAwesomeIcon icon="ellipsis-h" /></div>
      </div>
      );
    }
  }

export default Account