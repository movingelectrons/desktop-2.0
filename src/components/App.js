import '../assets/css/App.css'
import React, { Component } from 'react'
import WalletPage from './WalletPage'
import { observer } from 'mobx-react'
import store from '../WalletStore'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
library.add(faCopy, faEllipsisH)

@observer
class App extends React.Component {
  render() {
    return (
      <WalletPage store={store} />
    )
  }
}

export default App
