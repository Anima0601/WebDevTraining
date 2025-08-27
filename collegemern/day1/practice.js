const data = require("fs")
data.writeFileSync("practiceoutput.txt","Hello Node.js")
let readData =  data.readFileSync("practiceoutput.txt","utf-8")
console.log(readData)
data.appendFileSync("practiceoutput.txt","Practice makes Perfect")
let read =  data.readFileSync("practiceoutput.txt","utf-8")
console.log(read)

