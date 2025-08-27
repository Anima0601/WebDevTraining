const data = require("fs")  //import core module 
data.writeFileSync("abc.txt","Hello my first file through node") //write a file
const readData = data.readFileSync("abc.txt","utf-8"); //read file 
console.log(readData);

const data1 = require("os")
console.log(data1.platform())