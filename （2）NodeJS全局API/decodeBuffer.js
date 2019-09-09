var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf = Buffer.from(base64Str,"base64");
console.log(buf.toString("utf8"));