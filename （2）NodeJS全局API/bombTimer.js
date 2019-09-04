function Bomb() {}
Bomb.prototype.message = "bomb!!!";
Bomb.prototype.explode = function() {
    console.log(this.message);
}

setTimeout(function() {
    var bomb1 = new Bomb();
    bomb1.explode();
},2000);