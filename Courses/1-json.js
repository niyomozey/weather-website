const fs = require('fs');

const fileBuffer = fs.readFileSync("./1-json.json");
const dataJson = fileBuffer.toString();
//const dataJson = JSON.stringify(fileBuffer);
const data = JSON.parse(dataJson);
var otherBook = {
    'title':"rich dad poor dad",
    'autho':"X unkown",
    'rank':1,
    'age':45
};
data.title="rich dad poor dad";
data.author="X unkown";
data.age=45;
fs.appendFileSync("./1-json.json",JSON.stringify(otherBook));
console.log(data.title+" book written by "+data.author);
console.log("now is "+data.age+" yrs old");