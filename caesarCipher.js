// caesarCipher(string, shift) takes a string and a shift factor
// and retuns the string with each character "shifted"
function caesarCipher(str, shift) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let shiftedAlphabet = [];
  shiftAlphabet(shift);
  
  function shiftAlphabet(shift) {
    for (let i = 0; i < alphabet.length; i++) {
      if (i + shift <= 25 && i + shift >= 0) {
        shiftedAlphabet[i] = alphabet[i + shift];
      } else if (i + shift > 25) {
        shiftedAlphabet[i] = alphabet[i + shift - 26];
      } else {
        shiftedAlphabet[i] = alphabet[i + shift + 26]
      }
    }
  }

  let shiftedString = ``;

  for (let char of str) {
    if (/[a-z]/.test(char)) {
      shiftedString += (shiftedAlphabet[alphabet.indexOf(char)]);
    } else if (/[A-Z]/.test(char)) {
      shiftedString += (shiftedAlphabet[alphabet.indexOf(char.toLowerCase())]).toUpperCase();
    } else {
      shiftedString += char;
    }
  }

  return shiftedString;
}

caesarCipher('The quick brown fox jumps over the lazy dog.', -5);

module.exports = caesarCipher;