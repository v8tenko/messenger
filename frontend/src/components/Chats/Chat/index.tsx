import { useMemo } from 'react';

import { ChatList } from '@types';

import { ChatCard } from '../ChatCard';

import styles from './Chat.module.css';

type ChatsUIProps = {
	editMode?: boolean;
};

type Props = ChatsUIProps & ChatList;

export const Chat: React.FC<Props> = ({ chats, editMode }) => {
	const chatsNodes = useMemo(() => chats.map((chat) => <ChatCard {...chat} key={chat.id} editMode={editMode} />), [
		chats,
		editMode
	]);

	if (chatsNodes.length == 0) {
		return (
			<div className={styles.empty}>
				<p> You have no chats.</p>
			</div>
		);
	}

	return <div className={styles.chat}>{chatsNodes}</div>;
};
