import '../assets/css/App.css'
import React, { Component } from 'react'
import Accounts from './Accounts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

library.add(faCopy, faEllipsisH)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <Accounts />
      </div>
    )
  }
}

export default App
