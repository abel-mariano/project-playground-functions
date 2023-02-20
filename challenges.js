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

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas / Challenge 6 - Create calcTriangleArea, calcRectangleArea and calcAllAreas functions
function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return (base * height);
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse / Challenge 7 - Create the catAndMouse function
function catAndMouse(mouse, cat1, cat2) {
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);
  if (catOne < catTwo) {
    return 'cat1';
  } if (catTwo < catOne) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz / Challenge 8 - Create the fizzBuzz function
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 0) {
      array[index] = 'bug!';
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9 - Crie a função encode e a função decode / Challenge 9 - Create encode function and decode function
function encode(string) {
  const lettersToNumbers = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  string = string.replace(/[aeiou]/g, (numbers) => lettersToNumbers[numbers]);
  return string;
}

function decode(string) {
  const NumbersToletters = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  string = string.replace(/[12345]/g, (letters) => NumbersToletters[letters]);
  return string;
}
// Referência: https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call

// Desafio 10 - Crie a função techList / Challenge 10 - Create the techList function
function techList(technologies, names) {
  let array = [];
  let technologiesSort = technologies.sort();
  if (technologies.length === 0) {
    return array;
  }
  for (let index = 0; index < technologies.length; index += 1) {
    array.push({
      tech: technologiesSort[index],
      name: names,
    });
  }
  return array;
}