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