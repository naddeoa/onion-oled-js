
onion-oled-js is a JS library that exposes a collection of functions that wrap the `oled-exp` executable that controls the onion omega OLED display. This library is promise oriented and aims to provide higher level functionality in the future.

## Installation

```
npm install onion-oled-js
```

## Examples

```javascript
var OLEDExp = require('onion-oled-js').OLEDExp;

OLEDExp.powerOn()
  .then(OLEDExp.initialize)
  .then(() => OLEDExp.write('first thing', 0, 5))
  .then(() => OLEDExp.write('second thing too', 1, 1))
  .then(() => OLEDExp.cursor(3, 0))
  .then(() => OLEDExp.write('really really really really really really long sentence'));
```

## See also
* [OLED documentation](https://wiki.onion.io/Tutorials/Expansions/Using-the-OLED-Expansion)
