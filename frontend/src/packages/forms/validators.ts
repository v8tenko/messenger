import { Field, ValidationResult } from './types';

export const moreThan = (k: number) => (value: string | undefined): ValidationResult<string> => {
	if (value === undefined) {
		return {
			isOk: false,
			error: 'Value should not be empty'
		};
	}

	if (value.length <= k) {
		return {
			isOk: false,
			error: `Value should be greater than or equal to ${k}`
		};
	}

	return { isOk: true, value };
};

export const mathces = (regExp: RegExp) => (value: string | undefined): ValidationResult<string> => {
	if (value === undefined) {
		return {
			isOk: false,
			error: 'Value should not be empty'
		};
	}

	if (regExp.test(value)) {
		return { isOk: true, value };
	}

	return { isOk: false, error: 'Value is not correct' };
};

export const equals = <T>(to: Field<T>, name: string) => (value: T | undefined): ValidationResult<T> => {
	if (to.value == value) {
		return { isOk: true, value: value! };
	}

	return { isOk: false, error: `Value should be equal to ${name}` };
};
