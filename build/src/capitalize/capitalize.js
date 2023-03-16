"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
var capitalize = function (str) {
    if (str.length === 0)
        return 'String is empty';
    var firstLetter = str.charAt(0).toUpperCase();
    var restOfWord = str.slice(1);
    return "".concat(firstLetter).concat(restOfWord);
};
exports.capitalize = capitalize;
