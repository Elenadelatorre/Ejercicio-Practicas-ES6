//Ejercicio 3.1. - Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];

const points = [...pointsList];

console.log(points);

// Ejercicio 3.2 - Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

const toy1 = { ...toy };

console.log(toy1);

// Ejercicio 3.3 - Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
const list = [...pointsList1, ...pointsList2];

console.log(list);

// Ejercicio 3.4 - Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy2 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const toys3 = { ...toy, ...toyUpdate };

console.log(toys3);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const [color1, color2, , ...resto] = colors;
const colorUpdate = [color1, color2, ...resto];
console.log(colorUpdate);
