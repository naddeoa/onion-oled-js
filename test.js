var OLEDExp = require('./src/oled-exp');

OLEDExp.powerOn()
  .then(OLEDExp.initialize)
  .then(() => OLEDExp.write('first thing', 0, 5))
  .then(() => OLEDExp.write('second thing too', 1, 1))
  .then(() => OLEDExp.cursor(3, 0))
  .then(() => OLEDExp.write('really really really really really really long sentence'));

