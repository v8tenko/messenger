import { ChatCardParameters } from '@types';
import { bem } from '@utils';

import { ImageOrLetter } from '../ImageOrLetter';

import { ShuffleIcon } from './ShuffleIcon';

import styles from './ChatCard.module.css';

type ChatUIProps = {
	editMode?: boolean;
};

type Props = ChatUIProps & ChatCardParameters;

export const ChatCard: React.FC<Props> = ({ label, lastMessage, color, image, editMode }) => {
	return (
		<div className={styles.chatCard}>
			<ImageOrLetter image={image} label={label} color={color || '#65aadd'} />
			<div className={bem(styles.content, editMode && styles.move)}>
				<p className={styles.label}> {label}</p>
				<p className={styles.text}> {lastMessage}</p>
			</div>
			{editMode && <ShuffleIcon className={styles.shuffle} />}
		</div>
	);
};
