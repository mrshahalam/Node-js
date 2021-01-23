                             //Challenge Time 
//1 : Create a folder named it Thapa 
//2 : Create a file in it named bio. txt and data into it. 
//3 : Add more data into the file at the end of the existing data.
// 4 : Read the data without getting the buffer data at first. file encoding
// 5 : Rename the file name to mybio.txt 6: now delete both the file and the folder O
//      Asynchronous_CRUD_Operations.js
const fs = require("fs");

// fs.mkdir("thapa",(err) =>{
//     console.log("folder created");
// });

// fs.writeFile("./thapa/bio.txt","my name is Shah ALam",(err) =>{
//     console.log("files created");
// });

// fs.appendFile("./thapa/bio.txt",'after my name ',(err) =>{
//       console.log("data appended");
// });

// fs.readFile("./thapa/bio.txt" ,"UTF-8",(err,data) =>{
//     console.log(data);
// })

// fs.rename("./thapa/bio.txt/","./thapa/mybio.txt/",(err) =>{
//     console.log("file is renamed");
// })

// fs.unlink("./thapa/mybio.txt/",(err) =>{
//            console.log("file is deleted");
// });

fs.rmdir("./thapa",(err) =>{
    console.log("folder is deleted");
})