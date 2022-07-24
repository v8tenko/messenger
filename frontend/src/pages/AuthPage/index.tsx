import { Navigate } from 'react-router-dom';

import { useUser } from '@packages/context';

export const AuthPage: React.FC = () => {
	const { user } = useUser();

	if (user) {
		return <Navigate to="chats" />;
	}

	return <Navigate to="login" />;
};
