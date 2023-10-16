function checkPalindrome (isPalindrome) {
  isPalindrome = isPalindrome.toLowerCase().replaceAll(' ','');
  const reversePalindrome = isPalindrome.split('').reverse('').join('');
  if (isPalindrome === reversePalindrome) {
    return true;
  }

  return false;
}

function getNumbers (someString) {

}

function addSymbols (someString, minLength, addedString) {
  addedString.toString();

  if (someString.length < minLength) {
    for (let i = 0; someString.length <= minLength; i++) {
      if (i > addedString.length) {
        i = i - 1;
      }
      return addedString.at(i) + someString;
    }
  }
}

function compareLength (someString, lengthNeeded) {
  const stringLength = someString.length;

  if (stringLength <= lengthNeeded) {
    return true;
  }

  return false;
}
