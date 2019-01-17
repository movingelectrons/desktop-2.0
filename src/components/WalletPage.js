// @flow
import React, { Component } from 'react';
import './WalletPage.css';
//import routes from '../constants/routes';
import Accounts from './Accounts.js';

//import Wallet from '../Wallet.js';
var Wallet = require('../Wallet.js');
let w = new Wallet();

class WalletPage extends Component {

  handleClick(){
    alert(w.getWeb3().isConnected());
  }

  render() {

    const web3IsConnected = w.getWeb3().isConnected();
    let connMsg;

    if(web3IsConnected){
      connMsg = <span>connected to X peers</span>;
    }else{
      connMsg = <span className="error">Error: Web3 did not connect</span>;
    }

    return (
      <div className="wrapper">
        <header className="header">
          <h2>Musicoin</h2>
          <div className="header_center">
            {connMsg}
          </div>
          <div className="header_left">
            Header left
          </div>
        </header>
        <section className="content">
          <div className="columns">
            <aside className="sidebar">
              Sidebar
            </aside>
            <main className="main"><Accounts /></main>
          </div>
        </section>
        <footer className="footer">
          <button onClick={this.handleClick}>Click me</button>
          <button>Button</button>
          <button>Button</button>
        </footer>
      </div>
    );
        
  }
}

export default WalletPage