/**
 * Nous utilisons la méthode filter() pour créer un nouveau tableau qui ne contient que 
 * les nombres pairs du tableau fahrenheit. La méthode filter() prend une fonction de rappel en argument
 *  et applique cette fonction à chaque élément du tableau. Si la fonction de rappel renvoie true pour un élément,
 *  cet élément est inclus dans le nouveau tableau. Si la fonction de rappel renvoie false, l’élément n’est pas inclus.
Dans ce cas, la fonction de rappel est une fonction fléchée qui prend un argument n. 
La fonction vérifie si n est divisible par 2 (c’est-à-dire si n est pair) en utilisant l’opérateur modulo (%). 
Si n est divisible par 2, l’expression n % 2 renvoie 0 et la fonction fléchée renvoie true. 
Si n n’est pas divisible par 2, la fonction fléchée renvoie false.

En conséquence, le nouveau tableau créé par la méthode filter() ne contient que les nombres pairs du tableau fahrenheit d’origine :
 * 
 */

let fahreinheit = [1, 12, 24, 56, 55, 30, 50].filter((n) => n % 2 == 0);
console.log('====================================');
console.log(fahreinheit);
console.log('====================================');