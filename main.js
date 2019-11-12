const reader = require('readline-sync');
const util = require("./myUtils.js");

first = reader.question("Please input first number: ");
second = reader.question("Please input second number: ");

array = [];
for(let i=first; i<=second; i++)
{
    if(util.isPrime(i))
        array.push(i);
}
util.printArray(array);