var server = new http.Server();
server.on("request",function(req,res) {
    res.end("hello world");
});
server.listen(8080);
console.log("server is listening 8080");