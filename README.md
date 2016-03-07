
onion-oled-js is a JS library that exposes a collection of functions that wrap the `oled-exp` executable that controls the onion omega OLED display. This library is promise oriented and aims to provide higher level functionality in the future.

## Installation

```
npm install onion-oled-js
```

## Examples

```javascript
var OLEDExpr = require('onion-oled-js').OLEDExpr;

OLEDExpr.powerOn()
  .then(OLEDExpr.initialize)
  .then(() => OLEDExpr.write('first thing', 0, 5))
  .then(() => OLEDExpr.write('second thing too', 1, 1))
  .then(() => OLEDExpr.cursor(3, 0))
  .then(() => OLEDExpr.write('really really really really really really long sentence'));
```

## See also
* [OLED documentation](https://wiki.onion.io/Tutorials/Expansions/Using-the-OLED-Expansion)