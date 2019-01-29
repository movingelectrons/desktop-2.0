import { autorun, observable } from 'mobx'
const Web3 = require('web3');
const child_process = require('child_process');
const fs = require('fs');

function startGMC(){
    var args = [
        '--rpc',
        '--rpcapi=admin,db,eth,net,web3,personal',
        '--rpcport', '8545',
        '--rpcaddr', '127.0.0.1',
        '--rpccorsdomain', 'http://localhost:8080',
        '--fast',
        '--cache=512'
    ];
    var path = process.cwd()+'/bin/';
    console.log("attempting to start gmc with "+args+" and path "+path);
    fs.stat(path + 'gmc.pid', function (err, stats) {
        if(err){
        try{
            var child = child_process.spawn('./gmc-linux-amd64', args, {cwd: path});
            fs.writeFileSync(path + 'gmc.pid', child.pid);
            child.stdout.on('data', function(data) {
                console.log("gmc stdout: " + data);
            });
            child.on('error', function(error) {
                console.log("Failed to start child process gmc: " + error);
            });
            child.stderr.on('data', function(data) {
                console.log("gmc data: " + data);
            });
            child.on('close', function(code) {
                console.log("gmc process exited with code " + code);
            });
            console.log("end strating gmc"+child.pid);
            process.on('exit', function(){
                child.exit();
                fs.unlink(path + 'gmc.pid');
            });
        }catch(e){
            console.log("fatal: error starting gmc "+e);
            process.exit();
        }
    }else{
        console.log(path + 'gmc.pid already exists, assuming gmc is running already');
        return;
    }
    });
}

class WalletStore {
    constructor(){
        //this._accounts = {number: "one", pass: "two"};
        startGMC();
		var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
		this._web3 = web3;
    }
    
    @observable isConnected = this._web3.isConnected();
    @observable peerCount = 0
    @observable connStatus = "unknown"
    @observable accounts = [
        //{id: 0, public_key: "1233415", balance: "1234"}, 
        //{id: 1, public_key: "1233416", balance: "1236"}
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