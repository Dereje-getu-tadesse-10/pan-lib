/**
 * Linear interpolation between two numbers
 * @param start The start number
 * @param end The end number
 * @param amount The amount to interpolate between the two numbers
 * @returns The interpolated number
 */

type Lerp = (start: number, end: number, amount: number) => number;

export const lerp: Lerp = (start, end, amount) => {

	if (amount < 0 || amount > 1) {
		throw new Error("amount must be between 0 and 1");
	}

	return start + (end - start) * amount;
}