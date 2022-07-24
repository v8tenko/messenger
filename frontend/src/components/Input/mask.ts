import { observable } from 'mobx';

type Pattern = '0' | 'a' | '*';
type Part = {
	value: Pattern;
	index: number;
};

const PATTERN_SYMBOLS = ['0', 'a', '*'];

const isPatternSymbol = (symbol: string): boolean => PATTERN_SYMBOLS.includes(symbol);

export const matches = (type: Pattern, query: string): boolean => {
	if (type === '0') {
		return /[0-9]/.test(query);
	} else if (type === 'a') {
		return /([a-z]|([A-Z]))/.test(query);
	}
	if (type === '*') {
		return type.length === 1;
	} else {
		return type === query;
	}
};

export const splitQueryToParts = (query: string): Part[] => {
	const chars = query.split('');
	const parts = [] as Part[];

	let i = 0;

	while (i < chars.length) {
		if (!isPatternSymbol(chars[i])) {
			i++;
			continue;
		}
		parts.push({
			value: chars[i] as Pattern,
			index: i
		});
		i++;
	}

	return parts;
};

type Mask = {
	format(query: string): void;
	value: string;
};

export const maskBuilder = (pattern?: string): Mask => {
	if (pattern === undefined) {
		return observable({
			value: '',
			format(query: string) {
				this.value = query;
			},
			clear() {
				this.value = '';
			}
		});
	}

	const patterns = splitQueryToParts(pattern);

	const mask = {
		value: '',
		currentIndex: -1,
		currentPart: 0,
		format(query: string) {
			this.clear();
			const chars = query.split('');

			for (const char of chars) {
				const part = patterns[this.currentPart];

				if (this.currentPart >= patterns.length) {
					return;
				}

				if (!matches(part.value, char)) {
					continue;
				}

				if (this.currentIndex < part.index) {
					this.value += pattern.slice(this.currentIndex + 1, part.index);
					this.currentIndex = part.index;
				}

				this.value += char;
				this.currentPart++;
			}
		},
		clear() {
			this.value = '';
			this.currentIndex = -1;
			this.currentPart = 0;
		}
	};

	return observable(mask);
};
