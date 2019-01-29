// @flow
import React, { Component } from 'react';
import '../assets/css/WalletPage.css';
import Accounts from './Accounts.js';
import { observer } from 'mobx-react';
import * as Promise from 'bluebird';

@observer
class WalletPage extends Component {

  newAccount = (props) => {
    var newAccount = this.props.store.getWeb3().personal.newAccount("pa55word5arelame");
    return new Promise(function(resolve, reject){
      try{
        return resolve(newAccount);
      } catch(e){
        reject(e);
      }
    });
  }

  importAccount = (props) => {
    console.log(this.props);
  }

  refreshAccountsList = (props) => {
    try{
      let accounts = this.props.store.getWeb3().eth.accounts;
      console.log(accounts);
      let i = 0;
      let tar = []; //temporary accounts array
      for(let account of accounts){
        let ao = {id: i, public_key: account, balance: 0};
        tar.push(ao);
        i++;
      }
      this.props.store.accounts = tar;
    } catch(e){
      console.log(e);
    }
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        this.props.store.isConnected = this.props.store.getWeb3().isConnected();
        if(this.props.store.isConnected) {
          this.props.store.peerCount = this.props.store.getWeb3().net.peerCount;
          this.refreshAccountsList();  
        }
      }, 5000);
    } catch(e) {
      console.log(e);
    }  
  }

  render() {
    let connMsg;
    if(this.props.store.isConnected){
      connMsg = <span>Connected to {this.props.store.peerCount} peers.</span>
    }else{
      connMsg = <span className="error">Syncing...</span>
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
          <button onClick={this.newAccount}>New Account</button>
          <button onClick={this.importAccount}>Import Account</button>
        </footer>
      </div>
    );
        
  }
}

export default WalletPage