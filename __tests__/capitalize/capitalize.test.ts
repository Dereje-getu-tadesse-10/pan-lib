import { capitalize } from "../../src"

describe("capitalize", () => {

	it("should capitalize the first letter of a string", () => {
		expect(capitalize("hello world")).toBe("Hello world");
	});

	it("should return 'String is empty' if the string is empty", () => {
		expect(capitalize("")).toBe("String is empty");
	});

});