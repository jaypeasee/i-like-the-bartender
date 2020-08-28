var assert = require('chai').assert;
var Bartender = require('../exercises/bartender');
var Beer = require('../exercises/beer');


describe('Bartender', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Bartender);
  });

  it.skip('should have a name and a wage', function() {
    var bartender1 = new Bartender("Brad", 7.25);
    var bartender2 = new Bartender("Chad", 10.60);

    assert.equal(bartender1.name, "Brad");
    assert.equal(bartender1.hourlyWage, 7.25);
    assert.equal(bartender2.name, "Chad");
    assert.equal(bartender2.hourlyWage, 10.60);
  });

  it.skip('should start with no beer orders', function() {
    var bartender = new Bartender("Craig", 6.75);

    assert.deepEqual(bartender.orders, []);
  });

  it.skip('should be able to take orders', function() {
    var bartender = new Bartender("Chaz", 8.50);

    bartender.takeOrder("Grand Teton Brewing", "Bitch Creek", "Brown Ale", 7, 16);

    assert.instanceOf(bartender.orders[0], Beer);
    assert.equal(bartender.orders.length, 1);
    assert.equal(bartender.orders[0].brewer, 'Grand Teton Brewing');
    assert.equal(bartender.orders[0].name, 'Bitch Creek');
    assert.equal(bartender.orders[0].type, 'Brown Ale');
    assert.equal(bartender.orders[0].price, 7);
    assert.equal(bartender.orders[0].volume, 16);
  });

  it.skip('can hold a limited number of beers on a tray', function() {
    var bartender = new Bartender("Chucky", 15);

    bartender.takeOrder("Threes Brewing", "Logical Conclusion", 'IPA', 12, 12);
    bartender.takeOrder("Miller", "Highlife", "Pilsner", 5, 20);
    bartender.takeOrder("Other Half", "Dream City", "IPA", 12, 12);
    bartender.takeOrder("Randolph's", "Side Hustle", "Session IPA", 10, 12);
    bartender.takeOrder("Snake River Brewing", "Earned It", "Hazy IPA", 8, 20);

    assert.equal(bartender.orders.length, 5);

    bartender.takeOrder("Roadhouse", "Family Vacation", "Cream Ale", 8, 16);

    assert.equal(bartender.orders.length, 5);
    assert.equal(bartender.orders[0].name, "Logical Conclusion");
    assert.equal(bartender.orders[4].name, "Earned It");
  });

  it.skip('can serve the beers when the tray is full', function() {
    var bartender = new Bartender("Mac", 9.50);

    bartender.takeOrder("Sierra Nevada", "Hazy Little Thing", "Pale Ale", 7, 20);
    bartender.takeOrder("Oskar Blues", "Pinner", "Throwback IPA", 7, 20);
    bartender.takeOrder("Melvin", "Heyzeus", "Mexican Style Lager", 7, 16);
    bartender.takeOrder("Pacifico", "Clara", "Mexican Style Lager", 6, 20);

    assert.equal(bartender.serveOrder(), 'Cannot serve until my tray is full!');

    bartender.takeOrder("Beehive Brewery", "The Big", "Baltic Porter", 7, 16);

    assert.equal(bartender.serveOrder(), 'Here Are your drinks!');
    assert.deepEqual(bartender.orders, []);

    bartender.takeOrder("Lawson's Finest", "Sip of Sunshine", "IPA", 15, 12);
    assert.deepEqual(bartender.orders.length, 1);
  });

})
