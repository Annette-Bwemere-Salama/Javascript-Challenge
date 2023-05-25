/**
 *  Remplacer les positions impaires du tablaeu farhénat par des « * ». Pour cela nous avons
besoin de la position de l’élément (index).
 * 
 */


[45, 32, 0, 50, 75, 80, 120, 99].map((v, m) => (m % 2 == 0 ) ? v : '*')
console.log([45, 32, 0, 50, 75, 80, 120, 99].map((v, m) => (m % 2 == 0) ? v : '*'))