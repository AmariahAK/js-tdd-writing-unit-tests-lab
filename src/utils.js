// Your code here
// src/utils.js
export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string");
    }
  
    const sanitizedWord = word.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters and convert to lowercase
    const reversedWord = sanitizedWord.split('').reverse().join('');
    return sanitizedWord === reversedWord;
  }
  