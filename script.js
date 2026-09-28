let age = 20;
let autorisation = true;
let member = false;
let invitation = true;

let accses = age >= 18 && autorisation === true;
console.log(accses);

let inv = member === false || invitation === true;
console.log(inv);

let disponible = true;
console.log(!disponible);


let score = 14;
let seuil = 10;
let text = false;
let mouad = true
console.log(score > seuil); 
console.log(score === seuil);
console.log(score !== seuil);

let bux = score >= seuil && mouad === true;
console.log(bux);

let estValide = score >= seuil;
console.log(estValide);

