//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];
function swap(array, i1, i2) {
  if (i1 < 0 || i1 >= array.length || i2 < 0 || i2 >= array.length) {
    return array;
  }
  const temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
  return array;
}

console.log('Array sin cambio:', fantasticFour);
console.log('Array después del intercambio:', swap(fantasticFour, 2, 4));
