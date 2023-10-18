function checkPalindrome (isPalindrome) {
  isPalindrome = isPalindrome.toLowerCase().replaceAll(' ','');
  const reversePalindrome = isPalindrome.split('').reverse('').join('');
  return isPalindrome === reversePalindrome;
}

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN
function getNumbers (someString) {
  let onlyNumbers = '';
  for (let i = 0; i < someString.length; i++) {
    const separateSymbol = parseInt(someString.at(i), 10);

    if (Number.isNaN(separateSymbol) === false) {
      onlyNumbers = onlyNumbers + separateSymbol;
    }
  }
  return onlyNumbers;
}

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами
// Возвращает исходную строку, дополненную указанными символами до заданной длины

function addSymbols (someString, minLength, addedString) {
  addedString = addedString.toString();
  let result = someString;
  if (someString.length < minLength) {
    for (let i = 0; result.length < minLength; i++) {
      if (i === addedString.length) {
        i = i - addedString.length;
      }
      result = result + addedString.at(i);
    }
  }
  return result;
}

function compareLength (someString, lengthNeeded) {
  const stringLength = someString.length;

  if (stringLength <= lengthNeeded) {
    return true;
  }

  return false;
}
