"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var truncate_1 = require("@/truncate/truncate");
describe("truncate", function () {
    it('should truncate a string to a specified length', function () {
        expect((0, truncate_1.truncate)('Hello, world!', 5)).toBe('Hello...');
        expect((0, truncate_1.truncate)('Hello, world!', 13)).toBe('Hello, world!');
        expect((0, truncate_1.truncate)('Hello, world!', 5, '!!!')).toBe('Hello!!!');
    });
    it('should return an error if str is null, undefined or empty', function () {
        expect((0, truncate_1.truncate)('', 5)).toEqual(new Error("str cannot be null or undefined"));
    });
});
