import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function generateExcuses() {

  //Arrays de excusas disponibles
  let who = ["Mi perro", "Mi gato", "Mi hámster", "Mi pez dorado", "Mi loro"];
  let action = ["comió", "rompió", "perdió", "destruyó", "aplastó"];
  let what = ["mi tarea", "mi proyecto", "mis notas", "mi presentación", "mi portátil"];
  let when = ["antes de clase", "anoche", "esta mañana", "ayer", "justo ahora"];

  //Generar números aleatorios para seleccionar elementos de cada array de excusas
  let whoNumber = Math.floor(Math.random() * who.length);
  let actionNumber = Math.floor(Math.random() * action.length);
  let whatNumber = Math.floor(Math.random() * what.length);
  let whenNumber = Math.floor(Math.random() * when.length);

  //Seleccionar un elemento de cada array de excusas en base a los números aleatorios generados
  let whoWord = who[whoNumber];
  let actionWord = action[actionNumber];
  let whatWord = what[whatNumber];
  let whenWord = when[whenNumber];

  return whoWord + " " + actionWord + " " + whatWord + " " + whenWord;

}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuses();
};
