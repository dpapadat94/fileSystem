const fs = require("fs");
const path = require("path");

let fileNames = ["createFile", "readFile", "updateFile", "deleteFile"];
let fileExt = ".js";
let fileTemplete = `const fs = require("fs");

`;

let targetFolder = "src";

if (fs.existsSync(targetFolder)) {
  generateFiles();
} else {
  fs.mkdir(path.join(__dirname, targetFolder), (err) => {
    if (err) {
      console.error(err);
      console.log(`failed to create  ${targetFolder}`);
    } else {
      console.log(`succesfully created ${targetFolder}`);
      generateFiles();
    }
  });
}

function generateFiles() {
  fileNames.forEach((name) => {
    fs.writeFile(
      path.join(__dirname, targetFolder, `${name}${fileExt}`),
      fileTemplete,
      (err) => {
        if (err) {
          console.error(err);
          console.log(`failed to write to ${name}${fileExt}`);
        } else {
          console.log(`succesfully wrote ${name}${fileExt}`);
        }
      }
    );
  });
}
