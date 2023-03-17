// pan-lib.d.ts
declare module 'types/pan-lib' {
	export const clamp: (value: number, min: number, max: number) => number;
	export const capitalize: (str: string) => string;
	export const truncate: (str: string, length: number) => string;
	export const chunk: <T>(arr: T[], size: number) => T[][];
	export const lerp: (start: number, end: number, amount: number) => number;
	export const generateRandomColor: () => string;
}
