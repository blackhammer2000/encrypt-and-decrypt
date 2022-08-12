const input = document.querySelector('textarea');
const decodeButton = document.querySelector('.decode');
const resultsDisplay = document.querySelector('.results');
const resetButton = document.querySelector('.reset')

decodeButton.addEventListener('click', cipher)
resetButton.addEventListener('click', resetPage);

function cipher() {
  function encryptMessage(inputString) {
    let decodedString = '';
    const stringArray = inputString.split('');
    //console.log(stringArray)

    stringArray.forEach(character => {
      const asciiCode = character.charCodeAt();

      if (asciiCode === 32) {
        decodedString += character
      } else if (asciiCode  >= 33 && asciiCode <= 78 ){
        decodedString += String.fromCharCode(asciiCode + 47)
      } else if (asciiCode === 79){
        decodedString += character
      } else if (asciiCode >= 80 && asciiCode <= 126) {
        decodedString += String.fromCharCode(asciiCode - 47);
      } else {
        decodedString += character;
      }
    })
    return decodedString;
  }

  let solution = encryptMessage(input.value);
  resultsDisplay.textContent = solution;
}

function resetPage() {
  input.value = '';
  resultsDisplay.textContent = ''
}