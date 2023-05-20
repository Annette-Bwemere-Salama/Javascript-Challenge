/*
* Déclaration du tableau fahrenheit
*  map cree un nouveau tableau contenant les températures converties en degrés Celsius. La fonction passée à map prend chaque élément du tableau fahrenheit et applique la formule de conversion pour renvoyer la température en degrés Celsius.
* console.log() pour visualiser le rendu
*/

let fahrenheit = [10, 11, 80, 90, 70, 38, 32, 28, 45, 32, 0, 50, 75, 80, 120, 99];
let celcius = fahrenheit.map((el) => Math.round((el - 32) * 5 / 9));
console.log(celcius)
 // [
    // - 12, -12, 27, 32, 21, 3,
    // 0, -2, 7, 0, -18, 10,
    // 24, 27, 49, 37
//]