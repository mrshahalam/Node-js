const fs = require("fs");

// creating the new file if it does't exit at all
//fs.writeFileSync('read.txt',"welcome to my first Nodejs programme");

//fs.writeFileSync('read.txt',"This is new Data from next hand");

//fs.appendFileSync('read.txt',"   how are you bro in the next file  this is amazing  bro")

// Node.js includes an addi'onal data type called Buffer
// (not available in browser's JavaScript). 
// Buffer is mainly used to store binary data, 
// while reading from a file or receiving packets over the network.
const buf_data = fs.readFileSync('read.txt');    // this will gieve data in Binary formate
console.log(buf_data);                           // print the Binary data

String_data = buf_data.toString();        //conver the Binary data into String Data
console.log(String_data);

fs.renameSync('read.txt','readwrite.txt');  //  rename the file 
