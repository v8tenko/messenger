import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserProvider } from '@packages/context';
import { AuthPage } from '@pages/AuthPage';
import { ChatsPage } from '@pages/ChatsPage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={<AuthPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="chats" element={<ChatsPage />} />
					<Route path="*" element={<AuthPage />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};
