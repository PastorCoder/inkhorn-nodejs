// const path = require("node:path");
const path = require("path");

{
  /**console.log("This is __filename: ", __filename);
console.log("This is __dirname: ", __dirname);




console.log("This is path.basename(__filename): ", path.basename(__filename));
console.log("This is path.basename(____dirname   ): ", path.basename(__dirname));


console.log("This is path.extname(__filename): ", path.extname(__filename)); //.js
console.log("This is path.extname(____dirname   ): ", path.extname(__dirname)); //empty space


console.log("This is path.parse(__filename): ", path.parse(__filename));



console.log(
  " path.format(path.parse(__filename)): ",
  path.format(path.parse(__filename))
);


console.log("path.isAbsolute(__filename): ", path.isAbsolute(__filename));


console.log("path.isAbsolute('./data.json') : ", path.isAbsolute("./data.json"));
 */
}


{
  /**console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html")); 
console.log(path.join("/folder1", "//folder2", "index.html")); 
console.log(path.join("/folder1", "//folder2", "../index.html")); 
console.log(path.join(__dirname, "data.json")); //give full absolute path */
}


console.log(path.resolve("folder1", "folder2", "index.html")); 
// console.log(path.resolve("/folder1", "//folder2", "index.html")); 
// console.log(path.resolve("/folder1", "//folder2", "../index.html")); 
//console.log(path.resolve(__dirname, "data.json")); //give full absolute path
// console.log(path.resolve("folder1", "folder2", "index.html"));