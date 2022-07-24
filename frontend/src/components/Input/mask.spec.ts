import { maskBuilder, matches, splitQueryToParts } from './mask';

test('data split', () => {
	expect(splitQueryToParts('0 0 0')).toEqual([
		{ value: '0', index: 0 },
		{ value: '0', index: 2 },
		{ value: '0', index: 4 }
	]);
});

describe('match function', () => {
	it('mathces numbers', () => {
		const ciphers = new Array(10).fill(0).map((_, i) => `${i}`);

		ciphers.forEach((c) => {
			expect(matches('0', c)).toBeTruthy();
		});

		expect(matches('0', 'a')).toBeFalsy();
		expect(matches('0', '.')).toBeFalsy();
		expect(matches('0', '*')).toBeFalsy();
		expect(matches('0', 'w')).toBeFalsy();
	});

	it('matches letters', () => {
		const ciphers = new Array(10).fill(0).map((_, i) => `${i}`);

		ciphers.forEach((c) => {
			expect(matches('a', c)).toBeFalsy();
		});

		const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

		alphabet.forEach((c) => {
			expect(matches('a', c)).toBeTruthy();
			expect(matches('a', c.toUpperCase())).toBeTruthy();
		});
	});
});

describe('mask works', () => {
	it('format "799" to "7 9 9"', () => {
		const pattern = maskBuilder('0 0 0');

		pattern.format('799');

		expect(pattern.value).toEqual('7 9 9');
	});

	it('formats number', () => {
		const pattern = maskBuilder('+0 (000) 000-00-00');

		pattern.format('99999999999');

		expect(pattern.value).toEqual('+9 (999) 999-99-99');
	});
});
