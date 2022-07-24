import { field, moreThan, createForm, equals, Form } from '@packages/forms';

type RegisterForm = Form<{
	username: string;
	password: string;
	confirmPassword: string;
}>;

export const registerForm = (): RegisterForm => {
	const password = field({
		validator: moreThan(7)
	});

	const confirmPassword = field({
		validator: equals(password, 'Password')
	});

	const form = createForm({
		username: field({
			validator: moreThan(4)
		}),
		password,
		confirmPassword
	});

	return form;
};
