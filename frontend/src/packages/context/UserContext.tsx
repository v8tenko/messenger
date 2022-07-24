import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '@packages/hooks';
import { User, UserParameters } from '@types';

export const UserContext = createContext<User>(
	new Proxy({} as User, {
		get() {
			throw new Error('UserContext is not initialised');
		}
	})
);

type Props = {
	children: React.ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
	const [user, setUser] = useLocalStorage<UserParameters | undefined>('user', undefined);

	const navigate = useNavigate();

	const login = async (data: UserParameters) => {
		setUser(data);
		navigate('/chats', { replace: true });
	};

	const logout = () => {
		setUser(undefined);
		navigate('/login', { replace: true });
	};

	const value = useMemo(
		() => ({
			user,
			login,
			logout
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[user]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	return useContext(UserContext);
};
