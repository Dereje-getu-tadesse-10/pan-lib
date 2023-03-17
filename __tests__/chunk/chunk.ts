import { chunk } from "../../src/";

describe("chunk function", () => {
	it("should split an array into chunks of the specified size", () => {
		const input = [1, 2, 3, 4, 5, 6];
		const output = chunk(input, 2);
		expect(output).toEqual([[1, 2], [3, 4], [5, 6]]);
	});

	it("should return an empty array when the input array is empty", () => {
		const input: number[] = [];
		const output = chunk(input, 2);
		expect(output).toEqual([]);
	});

	it("should throw an error if the first parameter is not an array", () => {
		expect(() => {
			chunk("not an array" as unknown as number[], 2);
		}).toThrow("arr must be an array");
	});

	it("should throw an error if the second parameter is not a positive number", () => {
		expect(() => {
			chunk([1, 2, 3], -2);
		}).toThrow("size must be greater than 0");
	});
});
