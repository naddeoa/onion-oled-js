var Screen = require('./src/screen');
var OLEDExpr = require('./src/oled-exp');

OLEDExpr.powerOn()
  .then(OLEDExpr.initialize)
  .then(() => OLEDExpr.write('first thing', 0, 5))
  .then(() => OLEDExpr.write('second thing too', 1, 1))
  .then(() => OLEDExpr.cursor(3, 0))
  .then(() => OLEDExpr.write('really really really really really really long sentence'));

//var screen = new Screen();
//screen.init()
//  .then(() => screen.write("First sentence that is really really long and a bunch of other stuff too."))
//  .then(() => screen.write("This is the second sentence."))
//  .then(() => screen.write("And this too."));

