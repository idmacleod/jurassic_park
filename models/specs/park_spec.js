const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dinos;
  let park;

  beforeEach(function () {
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('diplodocus', 'herbivore', 100);
    dino3 = new Dinosaur('triceratops', 'herbivore', 30);
    dino4 = new Dinosaur('t-rex', 'omnivore', 1000);
    dinos = [dino1, dino2, dino3, dino4];
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
    assert.strictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function () {
    const dino5 = new Dinosaur('plesiosaurus', 'herbivore', 100);
    park.addDinosaur(dino5);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 5);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dino2)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino3, dino4]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.dinoWithMostVisitors();
    assert.deepStrictEqual(actual, dino4);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.allDinosOfSpecies('t-rex');
    assert.deepStrictEqual(actual, [dino1, dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 1180);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 430700);
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.annualRevenue();
    assert.strictEqual(actual, 4307000);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeAllBySpecies('t-rex');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dino2, dino3]);
  });

});