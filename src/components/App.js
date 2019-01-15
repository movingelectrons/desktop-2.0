import '../assets/css/App.css'
import React, { Component } from 'react'
import WalletPage from './WalletPage'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

library.add(faCopy, faEllipsisH)

class App extends React.Component {
  render() {
    return (
      <WalletPage />
    )
  }
}

export default App
