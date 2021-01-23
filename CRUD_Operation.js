
 //Challenge Time 
 //1 : Create a folder named it Thapa
 // 2: Create a file in it named bio. txt and data into it.
 // 3: Add more data into the file at the end of the existing
 // 4: Read the data without getting the buffer data at fir file encoding 
 //5: Rename the file name to mybio.txt 
 //6: now delete both the file and the folder
const fs  = require("fs");
fs.writeFileSync('bio.txt',"this is text in the bio file in thapa folder");
fs.appendFileSync('bio.txt',"this is the append data in bio.txt file ");
const data = fs.readFileSync('bio.txt','utf8');
console.log(data);
 const pure = data.toString();
 console.log(pure);
 fs.renameSync('bio.txt','mybio.txt');
 fs.unlinkSync("Thapa/mybio.txt");                         // for delete the file  in the directory
 fs.rmdirSync(Thapa);                                         // delete the folder


 