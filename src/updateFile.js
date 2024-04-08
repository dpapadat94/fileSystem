const { appendFile } = require("fs");

let appendContents = "\nHello World!".repeat(100);

appendFile("./HelloWorld.txt", appendContents, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("succesfully updated file");
  }
});
