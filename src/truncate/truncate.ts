
/**
 * Truncate a string to a specified length.
 * @param {string} str - The string to truncate.
 * @param {number} length - The length to truncate to.
 * @param {string} [end='...'] - The string to append to the end of the truncated string.
 */

type Truncate = (str: string, length: number, end?: string) => string | Error;

export const truncate: Truncate = (str, length, end= "...") => {
	if (str === "") return new Error("str cannot be null or undefined");
	if (str.length <= length) return str;

	let truncated = '';
	for (let i = 0; i < length; i++) {
		truncated += str[i];
	}
	truncated += end;

	return truncated;
};
