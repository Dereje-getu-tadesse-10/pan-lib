/**
 * Split an array into chunks of a given size.
 * @param arr
 * @param size
 */

export const chunk = <T>(arr: T[], size: number): T[][] => {
	if (!Array.isArray(arr)) {
		throw new Error("arr must be an array");
	}

	if (size < 1) {
		throw new Error("size must be greater than 0");
	}

	const result: T[][] = [];
	let chunk: T[] = [];

	for (let i = 0; i < arr.length; i++) {
		chunk.push(arr[i]);

		if (chunk.length === size || i === arr.length - 1) {
			result.push(chunk);
			chunk = [];
		}
	}

	return result;
}
