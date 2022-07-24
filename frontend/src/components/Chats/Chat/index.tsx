import { useMemo } from 'react';

import { ChatList } from '@types';

import { ChatCard } from '../ChatCard';

import styles from './Chat.module.css';

export const Chat: React.FC<ChatList> = ({ chats }) => {
	const chatsNodes = useMemo(() => chats.map((chat) => <ChatCard {...chat} key={chat.id} />), [chats]);

	if (chatsNodes.length == 0) {
		return (
			<div className={styles.empty}>
				<p> You have no chats.</p>
			</div>
		);
	}

	return <div className={styles.chat}>{chatsNodes}</div>;
};
