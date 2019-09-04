var i = 0;
var user = {
    name: "",
    email: "",
    qq: "",
    mobile: ""
}
console.log("name:");
process.stdin.on("data", function(data) {
    switch(i) {
        case 0:
            user.name = data.toString();
            console.log("email:");
            i++;
            break;
        case 1:
            user.email = data.toString();
            console.log("qq:");
            i++;
            break;
        case 2:
            user.QQ = data.toString();
            console.log("mobile:");
            i++;
            break;
        default:
            user.mobile = data.toString();
            console.log(user);
            process.exit();
    }
});