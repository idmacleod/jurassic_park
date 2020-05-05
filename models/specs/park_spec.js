const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dinos;
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('diplodocus', 'herbivore', 100);
    dino3 = new Dinosaur('triceratops', 'herbivore', 30);
    dinos = [dino1, dino2, dino3];
    park = new Park('Jurassic Park', 10, dinos);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function () {
    const dino4 = new Dinosaur('plesiosaurus', 'herbivore', 100);
    park.addDinosaur(dino4);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dino2)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.dinoWithMostVisitors();
    assert.deepStrictEqual(actual, dino2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const dino4 = new Dinosaur('t-rex', 'tacos', 1000);
    park.addDinosaur(dino4);
    const actual = park.allDinosOfSpecies('t-rex');
    assert.deepStrictEqual(actual, [dino1, dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 180);
  });

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
