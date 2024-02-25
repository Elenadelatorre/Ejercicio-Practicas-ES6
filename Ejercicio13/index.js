//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array. Finalmente retorna el array.

//EJEMPLO 1:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    //si el indice es distinto de -1:
    array.splice(index, 1); //eliminar un elemento en la posición del índice encontrado. El primer argumento es el índice y el segundo el número de elementos que deseamos eliminar.
  }
  return array;
}

const newArray = removeItem(mainCharacters, 'Chewbacca');
console.log(newArray);

//EJEMPLO 2:
const sports = ['Fútbol', 'Pádel', 'Tenis', 'Baloncesto', 'Balonmano'];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
const sportIndex = removeItem(sports, 'Baloncesto');
console.log(sportIndex);

//EJEMPLO 3:
const footballPlayers = ['Jude', 'Modric', 'Kroos', 'Vinicius', 'Courtois'];
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const playerIndex = removeItem(footballPlayers, 'Kroos');
console.log(playerIndex);
