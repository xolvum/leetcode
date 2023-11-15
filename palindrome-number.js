const isPalindrome = function(x) {
   const arrayOfDigits = Array.from(String(x), Number)
	
   return arrayOfDigits.join('') === arrayOfDigits.reverse().join('')
   
};

const x = 121;
isPalindrome(x);