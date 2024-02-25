//Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.
function rollDice(n) {
  if (n <= 0) {
    return 0;
  } else {
    return Math.floor(Math.random() * n) + 1;
  }
}

console.log(rollDice(6));
