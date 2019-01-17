
//const Wallet = require("../src/Wallet");
var Wallet = require('../src/Wallet.js');
//let w = new Wallet();

var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Wallet', function() {
	describe('inital state', function(){
		var wallet = new Wallet();
		it('should have empty _accounts array', function(){
			var t = wallet.accounts();
			assert.deepStrictEqual(t, {});
		});
	});
});