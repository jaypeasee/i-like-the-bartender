var assert = require('chai').assert;
var Beer = require('../exercises/beer');

describe('Beer', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Beer);
  });

  it.skip('should have a brewer, name, type, price, and volume', function() {
    var beer1 = new Beer({ brewer: "Melvin", name: "2 x 4", type: 'Imperial IPA', price: 8, volume: 12 });
    var beer2 = new Beer({ brewer: "Snake River Brewing", name: "La Cerveza", type: 'Mexican Style Lager', price: 7, volume: 20 });

    assert.equal(beer1.brewer, "Melvin");
    assert.equal(beer1.name, "2 x 4");
    assert.equal(beer1.type, "Imperial IPA");
    assert.equal(beer1.price, 8);
    assert.equal(beer1.volume, 12)

    assert.equal(beer2.brewer, "Snake River Brewing");
    assert.equal(beer2.name, "La Cerveza");
    assert.equal(beer2.type, "Mexican Style Lager");
    assert.equal(beer2.price, 7);
    assert.equal(beer2.volume, 20)
});

it.skip('should not be flat by default', function() {
  var beer = new Beer({ brewer: "Roadhouse", name: "Loose Boots", type: 'Apres IPA', price: 8, volume: 16 });
  assert.equal(beer.isFlat, false);
});

});
