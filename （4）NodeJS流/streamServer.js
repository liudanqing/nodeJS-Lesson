const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res) {
    var filePath = path.join(__dirname,"./data.txt");
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}).listen(8081);
console.log("正在监听8081！");