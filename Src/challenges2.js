// Desafio 11 - Crie a função generatePhoneNumber / Challenge 11 - Create the generate Phone Number function
function size(array) {
  for (let number of array) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}
function repeatNumber(array) {
  let repeat = [];
  for (let number of array) {
    repeat[number] = (repeat[number] || 0) + 1;
    if (repeat[number] >= 3) {
      return true;
    }
  }
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (size(array) || repeatNumber(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let phoneNumber = '(xx) xxxxx-xxxx';
  array.forEach((item) => {
    phoneNumber = phoneNumber.replace('x', item);
  });
  return phoneNumber;
}

// Desafio 12 -  Crie a função triangleCheck / Challenge 12 - Create the triangleCheck function
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13 - Crie a função hydrate / Challenge 13 - Create the hydrate function
function hydrate(string) {
  let find = /\d+/g;
  let arrayResult = string.match(find);
  let sum = 0;

  for (let numbers of arrayResult) {
    sum += parseInt(numbers, 10);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}
