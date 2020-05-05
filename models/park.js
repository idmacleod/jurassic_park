const Park = function (name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dino) {
    this.dinosaurs.push(dino);
};

Park.prototype.removeDinosaur = function (dinoToRemove) {
    this.dinosaurs = this.dinosaurs.filter(dino => dino !== dinoToRemove);
};

Park.prototype.dinoWithMostVisitors = function () {
    let result = this.dinosaurs[0];
    for (let i = 1; i < this.dinosaurs.length; i++) {
        let dino = this.dinosaurs[i];
        if (dino.guestsAttractedPerDay > result.guestsAttractedPerDay) {
            result = dino;
        }
    }
    return result;
};

Park.prototype.allDinosOfSpecies = function (species) {
    return this.dinosaurs.filter(dino => dino.species === species);
};

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0;
    for (dino of this.dinosaurs) {
        total += dino.guestsAttractedPerDay;
    }
    return total;
};

module.exports = Park;