// pan-lib.d.ts
declare module 'pan-lib' {
	/**
	 * Clamps a number between a minimum and maximum value.
	 * @param value The number to clamp.
	 * @param min The minimum value.
	 * @param max The maximum value.
	 * @returns The clamped number.
	 * @throws {Error} If min is greater than max.
	 */
	export const clamp: (value: number, min: number, max: number) => number;

	/**
	 * Capitalizes the first letter of a string.
	 * @param str The string to capitalize.
	 * @returns The capitalized string.
	 * @throws {Error} If str is not a string.
	 */
	export const capitalize: (str: string) => string;

	/**
	 * Truncates a string to a specified length.
	 * @param str The string to truncate.
	 * @param length The length to truncate the string to.
	 * @returns The truncated string.
	 */
	export const truncate: (str: string, length: number) => string;

	/**
	 * Splits an array into chunks of a specified size.
	 * @param arr The array to split.
	 * @param size The size of each chunk.
	 * @returns The array of chunks.
	 */
	export const chunk: <T>(arr: T[], size: number) => T[][];

	/**
	 * Linear interpolation between two numbers
	 * @param start The start number
	 * @param end The end number
	 * @param amount The amount to interpolate between the two numbers
	 * @returns The interpolated number
	 * @throws {Error} If amount is less than 0 or greater than 1.
	 */
	export const lerp: (start: number, end: number, amount: number) => number;

	/**
	 * Generates a random color.
	 * @returns A random color.
	 */
	export class RandomColor {
		constructor();
		toHex(): string;
		toRgb(): string;
	}

	/**
	 * Generates a random color.
	 * @returns A random color.
	 */
	export const generateRandomColor: () => RandomColor;
}
