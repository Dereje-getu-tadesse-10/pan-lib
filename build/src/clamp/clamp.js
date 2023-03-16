"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
var clamp = function (min, max, value) {
    if (min > max)
        throw new Error('min must be less than or equal to max');
    return Math.min(Math.max(value, min), max);
};
exports.clamp = clamp;
