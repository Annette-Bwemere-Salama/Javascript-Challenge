let fahreinheit = [10, 700, 200, 30, 230, 23, 450].filter(n => n > 50).map(n => (n - 3) * 5 / 9)
console.log('====================================');
console.log(fahreinheit);
console.log('====================================');


/**
 * Pour récupérer à la fois la valeur en Fahrenheit et la valeur en Celsius, on peut penser à :
 * 
 * 
 */

fahreinheit.filter(v => v > 50).map((v, k,arr) => [fahreinheit[k], (v - 32) * 5 / 19])
console.log('====================================');
console.log(fahreinheit);
console.log('====================================');