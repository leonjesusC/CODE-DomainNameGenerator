/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "his", "her", "their"];
let adj = ["great", "big", "aggresive", "fictional", "nefarious", "bright"];
let noun = ["jogger", "racoon", "beaver", "car", "drum", "hat"];

function generateName(pronoun, adjective, noun) {
  let i;
  let x;
  let y;
  let newName;
  let count = 0;

  for (i = 0; i < pronoun.length; i++) {
    for (x = 0; x < adjective.length; x++) {
      for (y = 0; y < noun.length; y++) {
        newName = pronoun[i] + adjective[x] + noun[y] + ".com";
        console.log(newName);
        count = count + 1;
      }
    }
  }

  /* CHECK DE QUE SE HAYAN GENERADO EL MISMO NUMERO DE COMBINACIONES"
  /*console.log(pronoun.length * adjective.length * noun.length);
  console.log(count);*/

  return "";
}

console.log(generateName(pronoun, adj, noun));
