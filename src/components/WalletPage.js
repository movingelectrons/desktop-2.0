// @flow
import React, { Component } from 'react';
import './WalletPage.css';
//import routes from '../constants/routes';
import Accounts from './Accounts.js';

class WalletPage extends Component {

  handleClick(){
    alert("yo!");
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <h2>Musicoin</h2>
          <div className="header_center">
            Connected to: x peers
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