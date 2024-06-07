/**
 * Removes diacritics (accents) from a string.
 * @param {string} text - The input text with diacritics.
 * @returns {string} - The text without diacritics.
 */
function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  /**
   * Checks if a given text is a palindrome.
   * @param {string} text - The input text to check.
   * @returns {Object} - An object containing boolean result, original text without spaces, and inverted text.
   */
  function isPalindrome(text) {
    let textWithoutSpaces = text.replace(/\s/g, "");
    let invertedText = textWithoutSpaces.split("").reverse().join("");
    if (textWithoutSpaces === invertedText) {
      return {
        isPalindrome: true,
        textWithoutSpaces,
        invertedText,
      };
    } else {
      return {
        isPalindrome: false,
        textWithoutSpaces,
        invertedText,
      };
    }
  }
  
  /**
   * Handles text input, checks if it's a palindrome, and updates the UI with the result.
   */
  function sendText() {
    let palindromeResult;
    let textWithoutDiacritics;
  
    // Get the value from the input field
    const inputText = document.getElementById("myInput").value;
    // Get the element where the message will be displayed
    const messageDiv = document.getElementById("message");
  
    // Remove diacritics and convert to lowercase
    textWithoutDiacritics = removeDiacritics(inputText.toLowerCase());
  
    // Check if the text is a palindrome
    palindromeResult = isPalindrome(textWithoutDiacritics);
  
    // Log the text without spaces and the inverted text
    // console.log(palindromeResult.textWithoutSpaces);
    // console.log(palindromeResult.invertedText);
  
    // Conditionally display a message based on whether it's a palindrome or not
    if (palindromeResult.isPalindrome === true) {
      messageDiv.innerHTML = `<text>${inputText}, <b>SI</b> es un palíndromo 🥳</text>`;
    } else {
      messageDiv.innerHTML = `<text>${inputText}, <b>NO</b> es un palíndromo 😓</text>`;
    }
  }
  