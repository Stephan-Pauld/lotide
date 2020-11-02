const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs", "cart"];
assertEqual(tail(words), "cart");