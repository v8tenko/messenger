export type Content<T> = {
	isOk: true;
	value: T;
};
export type Error = {
	isOk: false;
	error: string;
};

export type ValidationResult<T> = Content<T> | Error;

export type Validator<T> = (value: T) => ValidationResult<T>;

export type Field<T> = {
	value?: T;
	validate: () => ValidationResult<T>;
	error: string | null;
	onChange: (value: T) => void;
};

export type FormTypes = {
	[name: string]: any;
};

export type FormSource<FormType extends FormTypes = {}> = {
	[name in keyof FormType]: Field<FormType[name]>;
};

export type Form<FormType extends FormSource> = {
	fields: FormSource<FormType>;
	submit(): boolean;
	serialize(): {
		[name in keyof FormType]: FormType[name];
	};
};
