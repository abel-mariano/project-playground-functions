// Desafio 1 - Crie a função compareTrue / Challenge 1 - Create the compareTrue function
function compareTrue(god1, god2) {
  if (god1 === true && god2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence / Challenge 2 - Create the splitSentence function
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 3 - Crie a função concatName / Challenge 3 - Create the concatName function
function concatName(array) {
  let projectArray = array;
  let lastAndFirst = `${projectArray[projectArray.length - 1]}, ${projectArray[0]}`;
  return lastAndFirst;
}

// Desafio 4 - Crie a função footballPoints / Challenge 4 - Create the footballPoints function
function footballPoints(wins, ties) {
  let qtyPoints = (wins * 3) + ties;
  return qtyPoints;
}

// Desafio 5 - Crie a função highestCount / Challenge 5 - Create the highestCount function
function highestCount(array) {
  let higherNumber = Math.max(...array);
  let qtyRepeated = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (higherNumber === array[index]) {
      qtyRepeated += 1;
    }
  }
  return qtyRepeated;
}