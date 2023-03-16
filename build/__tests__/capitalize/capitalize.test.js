"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = require("@/capitalize/capitalize");
describe("capitalize", function () {
    it("should capitalize the first letter of a string", function () {
        expect((0, capitalize_1.capitalize)("hello world")).toBe("Hello world");
    });
    it("should return 'String is empty' if the string is empty", function () {
        expect((0, capitalize_1.capitalize)("")).toBe("String is empty");
    });
});
