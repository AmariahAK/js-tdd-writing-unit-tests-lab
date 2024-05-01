export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string");
    }
    
    if (word === "") {
      return false; // Return false for an empty string
    }
    
    if (!word.match(/^[A-Za-z]+$/)) {
      throw new Error("Input must only contain alphabetic characters");
    }
    
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters and convert to lowercase
    
    const reversedWord = sanitizedWord.split('').reverse().join('');
    return sanitizedWord === reversedWord;
  }