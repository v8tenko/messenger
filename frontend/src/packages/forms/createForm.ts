import { makeAutoObservable } from 'mobx';

import { Field, FormSource, Validator, FormTypes, Form } from './types';

export const field = <T = string>({
	initial,
	validator
}: { initial?: T; validator?: Validator<T | undefined> } = {}): Field<T> => {
	const field = {
		value: initial,
		onChange(newValue: T) {
			field.value = newValue;
		},
		validate() {
			if (!validator) {
				field.error = null;

				return;
			}
			const status = validator(field.value);

			if (status.isOk) {
				field.error = null;

				return;
			}
			field.error = status.error;

			return status;
		},
		error: null as string | null
	} as Field<T>;

	return makeAutoObservable(field);
};

export const createForm = <FormTypings extends FormTypes>(formSource: FormSource<FormTypings>): Form<FormTypings> => {
	const form = {
		fields: formSource,
		submit() {
			return Object.entries(form.fields).filter(([, field]) => field?.validate()?.isOk === false).length == 0;
		},
		serialize() {
			const formValue = {} as any;

			Object.entries(form.fields).forEach(([name, field]) => (formValue[name] = field.value));

			return formValue;
		}
	} as Form<FormTypings>;

	return makeAutoObservable(form);
};
