function checkPalindrome (isPalindrome) {
  isPalindrome = isPalindrome.toLowerCase().replaceAll(' ','');
  const reversePalindrome = isPalindrome.split('').reverse('').join('');
  if (isPalindrome === reversePalindrome) {
    return true;
  }

  return false;
}

// Функциякоторая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN
function getNumbers (someString) {
}

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами
// Возвращает исходную строку, дополненную указанными символами до заданной длины

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
