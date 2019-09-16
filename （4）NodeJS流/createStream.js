const stream = require("stream");
const util = require("util");
function MyReadable() {
    stream.Readable.call(this); // 运行的时候将push等在prototype上的方法调用，不然找不到这些方法
};
util.inherits(MyReadable,stream.Readable); // 将push等方法添加到MyReadable的prototype上
var reader = new MyReadable();
for(var i = 97; i<=122; i++) {
    reader.push(String.fromCharCode(i));
}
reader.push(null);
reader.pipe(process.stdout);