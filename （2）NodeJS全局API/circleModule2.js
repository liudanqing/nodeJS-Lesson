var obj = {
    circumference: circumference,
    area: area
};
function circumference(r) {
    return 2*Math.PI*r;
}
function area(r) {
    return Math.PI*r*r;
}
module.exports = {
    obj: obj
}