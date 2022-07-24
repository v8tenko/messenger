import { observer } from 'mobx-react-lite';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components';
import { useUser } from '@packages/context';
import { FieldInput } from '@packages/forms';
import { NotRequiresAuth } from '@utils';

import { loginForm } from './loginForm';

import styles from './LoginPage.module.css';

const LoginPagePure: React.FC = observer(() => {
	const form = useMemo(loginForm, []);
	const { login } = useUser();

	const loginOnClick = useCallback(() => {
		if (!form.submit()) {
			return;
		}
		const { username } = form.serialize();

		login({ username });
	}, [form, login]);

	return (
		<div className={styles.container}>
			<div className={styles.texts}>
				<h1> Simple messenger </h1>
				<p className={styles.description}>
					Please, enter your username and password <br />
					to login unto the user
				</p>
			</div>
			<div className={styles.loginInputs}>
				<FieldInput field={form.fields.username} label="Login" />
				<FieldInput field={form.fields.password} label="Password" type="password" />
			</div>
			<Button onClick={loginOnClick}>NEXT</Button>
			<Link className={styles.join} to="/register">
				Not registered? Join Simple messenger
			</Link>
		</div>
	);
});

export const LoginPage = () => <NotRequiresAuth component={<LoginPagePure />} />;
