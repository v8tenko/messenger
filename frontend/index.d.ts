declare module '*.module.css' {
	const content: {
		[style: string]: string;
	};

	export default content;
}

declare module '*.svg?inline' {
	const content: any;

	export default content;
}

declare module '*.svg' {
	const content: any;

	export default content;
}
