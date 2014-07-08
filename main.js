$(document).on('ready', function() {
  
});

// 1 - Palindrome = check if a string is a palindrome

var palindrome = function(word) {
	var wordSplit = word.split('');
	var backwardsWord = [];
	for (i=wordSplit.length; i >= 0; i--) {
		backwardsWord.push(wordSplit[i]);
	}
	backwardsWord = backwardsWord.join('');
	if (backwardsWord === word) {
		return	true;
	}
	else { return false; }

}


// 2 - dashInsert - insert dashes between adjacent odd numbers

var dashInsert = function(num) {
	var toArray = (num.toString()).split('');
	for (i=0; i < toArray.length-1; i++) {
		if (parseInt(toArray[i]) % 2 !== 0 && parseInt(toArray[i+1]) % 2 !== 0) {
			toArray[i] = toArray[i] + '-';
		}
	}
	var result = toArray.join('');
	return result;
};

// 3 ceasarCipher - takes string and number - number is used to transform the string 
// by moving the letter up the number in the alphabet.

var ceasarCipher = function(str, num) { 
	var toArray = str.split('');
	var codeArray = [];
	_.map(toArray, function(item) {
		codeArray.push(parseInt(item.charCodeAt()));
	});
	_.map(codeArray, function(item) {
		var newCode = item + num;
		if (newCode > 90 && newCode < 97) {
			newCode -= 26;
		}
		if (item <91 && newCode > 96) {
			newCode -= 26;
		}
		if (newCode > 122) {
			newCode -= 26;
		}
		if (newCode - num === 32) {
			newCode -= num
		}		
		codeArray.push(String.fromCharCode(newCode));
	});
		return (codeArray.splice(str.length)).join('');
	};