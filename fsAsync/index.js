const fs = require("fs");

// fs.writeFile("read.txt","stay safe and take care",(err)=>{
//     console.log("file created");
// })

// Adding more data
// fs.appendFile("read.txt", "we will defeat the virus.", (err) => {
//   console.log("More data added");
// });

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after data");

// fs.readFile("read.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("after data");

// FS CRUD Operation (Asynchronous):
// Create (C), Read (R), Update (U), Delete (D)
// •	Create a folder, name it Ram
// •	Create a file in it, name it bio.txt and write data into it.
// •	Add more data into the file at the end of the existing data.
// •	Read the data without getting the buffer data at first.
// •	Read the data using file encoding.
// •	Rename the file name to mybio.txt
// •	Now delete both the file and the folder.

// mkdir Ram

// fs.writeFileSync("Ram/bio.txt", "Ram is a good boy", (err) => {
//   console.log("Write successfully");
// });

// fs.appendFile("Ram/bio.txt", "Ram loves Sita", (err) => {
//   console.log("Data appended");
// });

// fs.readFile("Ram/bio.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.rename("Ram/bio.txt", "Ram/mybio.txt", (err) => {
//   console.log("File renamed successfully");
// });

fs.unlink("Ram/mybio.txt", (err) => {
  console.log("File deleted successfully");
});
