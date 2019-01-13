
class Account{
	constructor(password, phrase){
		//bcrypt password & phrase asap
		this._crypted_pass = password;
		this._crypted_phrase = phrase;

	}

}

class Wallet{
	constructor(){
		this._accounts = {};
	}

	accounts(){
		return this._accounts;
	}

	create_account(password, phrase){
		var account = new Account(password, phrase);
		_accounts.push(account);
	}
}

module.exports = Wallet;