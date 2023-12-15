const info = require("./information");
const cowsay = require("cowsay");

const message = `Salut, je suis ${info.name} du campus de ${info.campus}`;
console.log(cowsay.say({ text: message }));
