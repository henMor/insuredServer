var cjs = require('crypto-js');

var key = "ertyuiolkjgfdscvbnmsfjagdhkjf";
var cryptos = function() {
	function getEncrypt(input){
		var encypted = cjs.AES.encrypt(input, key);
		//console.log(encypted);
		return encypted.toString();

	}
	
	function getDecrypt(input){
		var decrypted = cjs.AES.decrypt(input, key);
		var text = decrypted.toString(cjs.enc.Utf8);
		//console.log(text);
		return text;

	}
	
	return {
		getEncrypt: getEncrypt,
		getDecrypt: getDecrypt
	}
}

module.exports = cryptos();