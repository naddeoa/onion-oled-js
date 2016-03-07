var OLEDExpr = require('./oled-exp');
var Promise = require('promise');

var maxX = 20;
var maxXReg = /.{1,21}/g;
var wordReg = /(\w+)/g;
var maxY = 8;

var Screen = function (opts) {
    var options = opts || {};
    this.col = 0;
    this.row = 0;
    this.wrapMode = options.wrapMode || 'wrap';
    this.lines = [];
};

Screen.prototype.write = function (string) {
    var self = this;
    var firstLine = string.substr(0, maxX - this.col);
    var otherLines = string.substr(maxX - this.col).match(maxXReg);

    var promise = OLEDExpr.write(firstLine, this.row, this.col).then(function () {
        return self._pushX(firstLine.length);
    });

    otherLines.forEach(function (line) {
        promise = promise.then(function () {
            return OLEDExpr.write(line, self.row, self.col);
        }).then(function () {
            return self._pushX(line.length);
        });
    });

    return promise;
};

Screen.prototype.addSentence = function(sentence) {

};

Screen.prototype._pushX = function (n) {
    var self = this;
    return new Promise(function (resolve, reject) {
        self.col += n-1;
        if (self.col >= maxX) {
            self.col -= maxX;
            self.row += 1;
        }
        resolve({x: self.col, y: self.row});
    }).then(this._setCursor.bind(this));
};

Screen.prototype._updateCursor = function () {
    return OLEDExpr.cursor(this.row, this.col);
};

Screen.prototype._setCursor = function (newValues) {
    return OLEDExpr.cursor(newValues.y, newValues.x);
};

Screen.prototype.clear = function () {
    return OLEDExpr.clear().then(this._clear);
};

Screen.prototype.init = function () {
    return OLEDExpr.power('on').then(OLEDExpr.initialize);
};

Screen.prototype._clear = function () {
    var self = this;
    return new Promise(function (resolve, reject) {
        self.col = 0;
        self.row = 0;
    });
};

module.exports = Screen;