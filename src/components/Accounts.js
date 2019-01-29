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
      <Account 
        id={account.id} 
        key={account.id} 
        public_key={account.public_key} 
        balance={account.balance} 
        />
    ))
    
    return (
      <ul className="accounts">
        <li className="accounts_header">
          <div>Address</div>
          <div className="ab_spacer"></div>
          <div>Balance</div>
          <div className="actions">Actions</div>
        </li>
        {accountsList}
      </ul>
    );
        
  }
}

export default Accounts