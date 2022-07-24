export type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
	? `${T}${Capitalize<SnakeToCamelCase<U>>}`
	: S;

type ApiFields = Date;

export type SnakeToCamelCaseNested<T> = T extends object
	? T extends ApiFields
		? T
		: {
				[K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>;
		  }
	: T;

export type Request<T> = {
	[K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>;
};
