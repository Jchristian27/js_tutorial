// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("")
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

function emailParts(email) {
  let emailStr = email.toLowerCase();
  let emailArr = emailStr.split('@');
  let username = emailArr[0];
  let domain = emailArr[1];
  return [username, domain];
}