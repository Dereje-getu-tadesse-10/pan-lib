
/**
	This function returns a value that is constrained between a specified minimum and maximum value.
	If the value is less than the minimum value, it returns the minimum value.
	If the value is greater than the maximum value, it returns the maximum value.
	@function
	@param {number} min - The minimum allowed value.
	@param {number} max - The maximum allowed value.
	@param {number} value - The value to check.
	@throws {Error} If the minimum value is greater than the maximum value.
 */
type Clamp = (min: number, max: number, value: number) => number;

export const clamp: Clamp = (min, max, value) => {
	if (min > max) throw new Error('min must be less than or equal to max');
	return Math.min(Math.max(value, min), max);
};




