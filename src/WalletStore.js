import { autorun, observable } from 'mobx'
var Web3 = require('web3');

class WalletStore {
    constructor(){
		//this._accounts = {number: "one", pass: "two"};
		var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		this._web3 = web3;
    }
    
    @observable isConnected = this._web3.isConnected();
    @observable connStatus = "unknown"
    @observable accounts = [
        {id: 0, public_key: "1233415", balance: "1234"}, 
        {id: 1, public_key: "1233416", balance: "1236"}
    ]

    getWeb3(){
		return this._web3;
	}
}

var store = window.store = new WalletStore

export default store

/*
autorun(() => {
    console.log(store.accounts[0])
})
*/