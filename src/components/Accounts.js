// @flow
import React, { Component } from 'react';
import '../assets/css/Accounts.css';
import Account from './Account.js';
import { observer } from 'mobx-react'

@observer
class Accounts extends Component {

  render() {
    const { accounts } = this.props.store

    const accountsList = accounts.map(account => (
      <li key={account.id}>
        <Account public_key={account.public_key} balance={account.balance} />
      </li>
    ))
    
    return (
      <ul className="accounts">
        <li className="accounts_header">
          <div>Account</div>
          <div></div>
          <div>Balance</div>
          <div className="actions">Actions</div>
        </li>
        {accountsList}
      </ul>
    );
        
  }
}

export default Accounts