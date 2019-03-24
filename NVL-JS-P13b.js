/* Queremos realizar una función que detecte palíndromos. O_o.
  Sí, palíndromo. Son palabras o frases que da igual si las lees de
  izquierda a derecha, que de derecha a izquierda, vas a entender lo mismo.*/

// MEdiante Prompt pedimos en e browser una Frase ponemos un palindrome por defecto
var fraseUser = prompt("Comprueba si frase o Palabra es un Palindromo","Ligar es ser agil");
// CreamosFuncion de comparación
function frasePalindromo(fraseUser){
  // Paso la fraseUser a minusculas y quito espacios
  fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");
  /* Creo otra frase partiendo de la de userFrase pero
  la convierto en array, le doy la vuelta al array, lo paso a string*/
  fraserReverse=fraseUser.split("").reverse().toString();
  // Le quito las "," con un remplace dentro del for
  // Lo igualo a -1 ya que tiene una coma menos que el número total de letras
  for (var i = 0; i < ((fraserReverse.length)-1); i++) {
    fraserReverse=fraserReverse.replace(",","");
  };
  // Comparo las dos frases.
  if(fraseUser==fraserReverse){
    // Si el resultado es positivo
    resultado="es un Palindromo";
  }
  else{
    // Si el resultado es negativo
    resultado="no es un Palindromo";
  }
  // Muestro el el resultado
  document.write("Tu frase "+resultado);
}
// Llamo a la función comparación con el parámetro del user
frasePalindromo(fraseUser);
