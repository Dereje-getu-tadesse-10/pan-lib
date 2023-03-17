import { lerp } from "../../src"

describe("lerp function", () => {

	it("should interpolate between two numbers with the specified amount", () => {
		const start = 0;
		const end = 10;
		const amount = 0.5;
		const output = lerp(start, end, amount);
		expect(output).toEqual(5);
	});

	it("should throw an error if the amount is less than 0", () => {
		expect(() => {
			lerp(0, 10, -1);
		}).toThrow("amount must be between 0 and 1");
	});

	it("should throw an error if the amount is greater than 1", () => {
		expect(() => {
			lerp(0, 10, 2);
		}).toThrow("amount must be between 0 and 1");
	});
});
