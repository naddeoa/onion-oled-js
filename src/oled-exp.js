var Promise = require('promise');
var exec = Promise.denodeify(require('child_process').exec);

var oledExecutable = '/usr/sbin/oled-exp';

/**
 * Functions to interface with the OLED display.
 */
var OLEDExpr = {

    /**
     * Initialize the OLED screen. This has to be done at least
     * once before it can be written to.
     * @returns {Promise}
     */
    initialize: function () {
        return exec(oledExecutable + ' -i');
    },

    /**
     * Clear the screen.
     * @returns {Promise}
     */
    clear: function () {
        return exec(oledExecutable + ' -c');
    },

    /**
     * Set the screen state.
     * @param {string} mode on or off
     * @returns {Promise}
     */
    power: function (mode) {
        return exec(oledExecutable + ' power ' + mode);
    },

    /**
     * Turn the screen on
     * @returns {Promise}
     */
    powerOn: function() {
        return OLEDExpr.power('on');
    },

    /**
     * Turn the screen off
     * @returns {Promise}
     */
    powerOff: function() {
        return OLEDExpr.power('off');
    },

    /**
     * Set the cursor
     * @param {number} row The row to set the cursor to
     * @param {number} col The column to set the cursor to
     * @returns {Promise}
     */
    cursor: function (row, col) {
        return exec(oledExecutable + ' cursor ' + row + ',' + col);
    },

    /**
     * Invert the display colors
     * @param {string} mode on or off
     * @returns {Promise}
     */
    invert: function (mode) {
        return exec(oledExecutable + ' invert ' + mode);
    },

    /**
     * Write a string to the display.
     * If row or col is supplied, then start at that point.
     * @param {string} string Some string to write to the screen
     * @param {number?} row The row start from
     * @param {number?} col The column to start from
     * @returns {Promise}
     */
    write: function (string, row, col) {
        var cursor = row !== undefined && col !== undefined ? ' cursor ' + row + ',' + col : '';
        return exec(oledExecutable + cursor + ' write "' + string + '"');
    },

    /**
     * Scroll in a direction
     * @param {string} direction up, down, left, right
     * @returns {Promise}
     */
    scroll: function (direction) {
        return exec(oledExecutable + ' write ' + direction);
    }
};

module.exports = OLEDExpr;