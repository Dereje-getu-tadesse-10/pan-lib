import {  RandomColor } from "../../src/randomColor/randomColor"
import {generateRandomColor } from '../../src';

describe('RandomColor', () => {
	it('should generate a random color object', () => {
		const randomColor = generateRandomColor();
		expect(randomColor).toBeInstanceOf(RandomColor);
	});

	it('should generate a valid hexadecimal color string', () => {
		const randomColor = generateRandomColor();
		const hexPattern = /^#([A-Fa-f0-9]{6})$/;
		expect(randomColor.toHex()).toMatch(hexPattern);
	});

	it('should generate a valid RGB color string', () => {
		const randomColor = generateRandomColor();
		const rgbPattern = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
		expect(randomColor.toRgb()).toMatch(rgbPattern);
	});
});
