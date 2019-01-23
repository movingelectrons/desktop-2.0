// @flow
import React, { Component } from 'react';
import '../assets/css/WalletPage.css';
import Accounts from './Accounts.js';
import { observer } from 'mobx-react'

//import Wallet from '../Wallet.js';
//var Wallet = require('../Wallet.js');
//let w = new Wallet();

@observer
class WalletPage extends Component {

  handleClick(){
    //alert(w.getWeb3().isConnected());
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        this.props.store.isConnected = this.props.store.getWeb3().isConnected();
      }, 3000);
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    let connMsg;
    if(this.props.store.isConnected){
      connMsg = <span>Yay, connected is true</span>
    }else{
      connMsg = <span className="error">Failed to connect to local gmc server</span>
    }

    return (
      <div className="wrapper">
        <header className="header">
          <h2>Musicoin</h2>
          <div className="header_center">
            <span>{connMsg}</span>
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
            <main className="main"><Accounts store={this.props.store} /></main>
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