console.log("archivo bucles.js funcionando OK");

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.

for (let j = 0; j <= 9; j++) {
  const imprime = [j];
  if (j / 2 == 0) {
    console.log(imprime)
  }
}

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle empieza en 0 y termina en 10.
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let i = 0; i < 10; i++) {

  const imprime = "Intentando dormir";
  const imprime1 = "Dormido";

  if (i < 9) {
    console.log(imprime)
  }
  else if (i == 9) {
    console.log(imprime1);
  }
}