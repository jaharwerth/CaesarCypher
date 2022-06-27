// YOUR CODE BELOW
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function caesarCypher(secret, shift) {
  let encryptedMessage = '';
  for (let i = 0; i < secret.length; i++) {
    let char = secret[i];
    if (char === " ") {
     encryptedMessage += " ";
    } 
    else {
      let charIndex = alphabet.indexOf(char);
      let shiftedIndex = charIndex + shift;
      if (shiftedIndex > 25) {
        shiftedIndex = shiftedIndex % 26
      }
      let newCharIndex = alphabet.at(shiftedIndex);
      encryptedMessage += newCharIndex;
    }
  } 
  return encryptedMessage;
}

// TESTS
describe('Caesar Cypher', () => {

  it('is a function?', () => {
    expect(typeof caesarCypher).toEqual('function');
  });

  it('rotates a letter by the number passed in', () => {
    let returnedValue = caesarCypher('a', 2);
    expect(returnedValue).toEqual('c');
  });

  it('rotates every letter in the string by the supplied letter', () => {
    let returnedValue = caesarCypher('doggo', 7);
    expect(returnedValue).toEqual('kvnnv');
  });

  it('wraps around to the beginning of the alphabet when necessary', () => {
    let returnedValue = caesarCypher('hello', 13);
    expect(returnedValue).toEqual('uryyb');
  });

  it('retains spaces between encrypter world', () => {
    let returnedValue = caesarCypher('hello world', 13);
    expect(returnedValue).toEqual('uryyb jbeyq');
  });

});