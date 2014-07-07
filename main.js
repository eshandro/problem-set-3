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
