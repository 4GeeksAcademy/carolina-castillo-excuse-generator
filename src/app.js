import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomExcuse() {
  let who = [ 'Mi padre', 'Mi gato', 'Mi primo', 'Mi vecino'];
  let action = ['rompio', 'tiro', 'robo' ];
  let what = ['mi telefono', 'mi ordenador', 'mi coche'];
  let when = ['mientras estudiaba', 'mientras estaba en el gimnasio', 'mientras compraba'];

  const randomWho = Math.floor(Math.random() * who.length);
  const randomAction = Math.floor(Math.random() * action.length);
  const randomWhat = Math.floor(Math.random() * what.length);
  const randomWhen = Math.floor(Math.random() * when.length);

  return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;

 }

window.onload = function() {
  const excuseElement = document.getElementById('excuse')
  excuseElement.innerHTML = randomExcuse();
};
