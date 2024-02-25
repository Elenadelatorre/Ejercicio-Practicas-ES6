//Ejercicio 5.1 - Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const newArray = ages.filter((age) => age > 18);
console.log(newArray);

//Ejercicio Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenNumbers = ages1.filter((age) => age % 2 === 0);
console.log(evenNumbers);

//Ejercicio 5.3 - Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];
const newStreamers = streamers.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
);
console.log(newStreamers);

// Ejercicio 5.4 - Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];
const newStreamersWithU = streamers.filter((streamer) =>
  streamer.name.includes('u')
);
console.log(newStreamersWithU);

//Ejercicio 5.5 - utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];
const newStreamersLegends = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return true;
  }
  return false;
});
console.log(newStreamersLegends);

//Ejercicio 5.6. - Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

function inputStreamer() {
  const input = document.querySelector('input').value;
  const newStreamersInput = streamers3.filter((streamer) => {
    if (streamer.name.includes(input)) {
      return true;
    }
    return false;
  });
  console.log(newStreamersInput);
}

document.querySelector('input').addEventListener('input', inputStreamer, false);
