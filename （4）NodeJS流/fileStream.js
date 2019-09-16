const fs = require("fs");
const path = require("path");
var fromPath = path.join(__dirname,"./from.txt");
var toPath = path.join(__dirname,"./to.txt");
var readStream = fs.createReadStream(fromPath);
var writeStream = fs.createWriteStream(toPath);
readStream.pipe(writeStream);