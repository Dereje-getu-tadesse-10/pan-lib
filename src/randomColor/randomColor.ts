/**
 * Class representing a random color.
 */
export class RandomColor {
	/**
	 * The red component of the color.
	 * @type {number}
	 * @private
	 */
	private red: number;

	/**
	 * The green component of the color.
	 * @type {number}
	 * @private
	 */
	private green: number;

	/**
	 * The blue component of the color.
	 * @type {number}
	 * @private
	 */
	private blue: number;

	/**
	 * Create a new random color.
	 */
	constructor() {
		this.red = Math.floor(Math.random() * 256);
		this.green = Math.floor(Math.random() * 256);
		this.blue = Math.floor(Math.random() * 256);
	}

	/**
	 * Convert the random color to its hexadecimal representation.
	 * @returns {string} The hexadecimal color string.
	 */
	public toHex(): string {
		const toHexColor = (value: number): string =>
			('0' + value.toString(16)).slice(-2).toUpperCase();
		return `#${toHexColor(this.red)}${toHexColor(this.green)}${toHexColor(this.blue)}`;
	}

	/**
	 * Convert the random color to its RGB representation.
	 * @returns {string} The RGB color string.
	 */
	public toRgb(): string {
		return `rgb(${this.red}, ${this.green}, ${this.blue})`;
	}
}

/**
 * Generate a new random color object.
 * @returns {RandomColor} The new random color object.
 */
export const generateRandomColor = (): RandomColor => {
	return new RandomColor();
}

console.log(generateRandomColor().toHex());
