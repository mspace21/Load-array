var fs = require("fs");
var word = fs.readFileSync("text.txt").toString();
word = word.split("\n");
console.log(word)