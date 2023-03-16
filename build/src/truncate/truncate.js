"use strict";
/**
 * Truncate a string to a specified length.
 * @param {string} str - The string to truncate.
 * @param {number} length - The length to truncate to.
 * @param {string} [end='...'] - The string to append to the end of the truncated string.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = void 0;
var truncate = function (str, length, end) {
    if (end === void 0) { end = "..."; }
    if (str === "")
        return new Error("str cannot be null or undefined");
    if (str.length <= length)
        return str;
    var truncated = '';
    for (var i = 0; i < length; i++) {
        truncated += str[i];
    }
    truncated += end;
    return truncated;
};
exports.truncate = truncate;
