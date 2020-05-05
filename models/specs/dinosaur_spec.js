const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
  });

  it('should have a species', function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet');

  it('should have an average number of visitors it attracts per day');

});
