function circleFun(r) {
    circumference(r);
    area(r);
    return obj;
}
function circumference(r) {
    obj.circumference = 2*Math.PI*r;
}
function area(r) {
    obj.area = Math.PI*r*r;
}
var obj = {};
module.exports = {
    circleFun: circleFun
}