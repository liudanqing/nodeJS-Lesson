/**
 * 1、传入命令行参数，是一个算术运算式 1*2+3
 * 2、程序将算数运算式计算得出结果并在控制台输出
 *   1*2+3=5  eval()
 * 3、程序判断一下是否传入命令行参数，如果没有传入，控制台输出“命令行参数错误！”
 */

var arr = process.argv;
if(arr[2] == undefined) {
    console.log("命令行参数错误！");
}
else if(arr[2] == "-h") {
    console.log("帮助：命令行参数需为算术运算式");
}
else {
    var result = eval(arr[2]);
    console.log(arr[2] + "=%s", result);
}