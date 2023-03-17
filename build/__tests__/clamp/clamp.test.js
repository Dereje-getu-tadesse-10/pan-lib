"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
describe("clamp", function () {
    it("should return min if value is less than min", function () {
        expect((0, src_1.clamp)(0, 1, -1)).toBe(0);
    });
    it("should return max if value is greater than max", function () {
        expect((0, src_1.clamp)(0, 1, 2)).toBe(1);
    });
    it("should return the value if it is between min and max", function () {
        expect((0, src_1.clamp)(0, 1, 0.5)).toBe(0.5);
    });
    describe('error handling', function () {
        it("should throw an error if min is greater than max", function () {
            expect(function () { return (0, src_1.clamp)(1, 0, 0); }).toThrow();
        });
    });
});
