import { truncate } from "@/truncate/truncate";

describe("truncate", () => {

	it('should truncate a string to a specified length', () => {
		expect(truncate('Hello, world!', 5)).toBe('Hello...');
		expect(truncate('Hello, world!', 13)).toBe('Hello, world!');
		expect(truncate('Hello, world!', 5, '!!!')).toBe('Hello!!!');
	});

	it('should return an error if str is null, undefined or empty', () => {
		expect(truncate('', 5)).toEqual(new Error("str cannot be null or undefined"));
	});
})