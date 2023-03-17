import { clamp } from "../../src"


describe("clamp", () => {
	it("should return min if value is less than min", () => {
		expect(clamp(0, 1, -1)).toBe(0);
	});

	it("should return max if value is greater than max", () => {
		expect(clamp(0, 1, 2)).toBe(1);
	});

	it("should return the value if it is between min and max", () => {
		expect(clamp(0, 1, 0.5)).toBe(0.5);
	});

	describe('error handling', () => {
		it("should throw an error if min is greater than max", () => {
			expect(() => clamp(1, 0, 0)).toThrow();
		});
	});
});