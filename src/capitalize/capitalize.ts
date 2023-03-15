

/**
 * Capitalize the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} - The capitalized string
 * @example capitalize('hello world') // 'Hello world'
 */
type capitalize = (str: string) => string;
export const capitalize: capitalize = (str) => {

	if (str.length === 0) return 'String is empty';

	const firstLetter = str.charAt(0).toUpperCase();
	const restOfWord = str.slice(1);

	return `${firstLetter}${restOfWord}`;
}

