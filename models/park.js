const Park = function (name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dino) {
    this.dinosaurs.push(dino);
}

module.exports = Park;