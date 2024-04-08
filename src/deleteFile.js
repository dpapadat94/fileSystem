const { unlink } = require("fs");

unlink("./HelloWorld.txt", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("succesfully Deleted File");
  }
});
