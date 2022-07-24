import { Chat, Navigation } from '@components';
import { RequiresAuth } from '@utils';

import styles from './ChatsPage.module.css';

const ChatsPagePure: React.FC = () => {
	return (
		<Navigation className={styles.container} labels={['Chats']}>
			<Chat chats={[]} />
		</Navigation>
	);
};

export const ChatsPage = () => <RequiresAuth component={<ChatsPagePure />} />;
