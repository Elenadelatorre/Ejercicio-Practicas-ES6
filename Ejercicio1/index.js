// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.

//Ejercicio 1.1. - Ejecuta esta función sin pasar ningún parametro.
const suma1 = () => {
  const a = 10;
  const b = 5;
  console.log(a + b);
};

suma1();

// Ejercicio 1.2. - Ejecuta esta función pasando un solo parametro.
const suma2 = (a = 10) => {
  const b = 5;
  console.log(a + b);
};

suma2();

//Ejercicio 1.3. - Ejecuta esta función pasando dos valores de parametro.
const suma3 = (a = 10, b = 5) => {
  console.log(a + b);
};

suma3();
