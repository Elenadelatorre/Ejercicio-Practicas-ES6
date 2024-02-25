//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

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

const index = findArrayIndex(mainCharacters, 'Chewbacca');
console.log(index);

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

const sportIndex = findArrayIndex(sports, 'Baloncesto');
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

const playerIndex = findArrayIndex(footballPlayers, 'Kroos');
console.log(playerIndex);
