import { useMemo } from 'react';

import { Button } from '@components';
import { FieldInput } from '@packages/forms';
import { NotRequiresAuth } from '@utils';

import { registerForm } from './registerForm';

import styles from './RegisterPage.module.css';

const RegisterPagePure: React.FC = () => {
	const form = useMemo(registerForm, []);

	return (
		<div className={styles.container}>
			<p> Join simple messenger </p>
			<div className={styles.loginInputs}>
				<FieldInput label="Login" field={form.fields.username} />
				<FieldInput label="Password" field={form.fields.password} type="password" />
				<FieldInput label="Confirm password" field={form.fields.confirmPassword} type="password" />
			</div>
			<Button onClick={form.submit}>NEXT</Button>
		</div>
	);
};

export const RegisterPage = () => <NotRequiresAuth component={<RegisterPagePure />} />;
