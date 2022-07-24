import { bem } from '@utils';

import styles from './ImageOrLetter.module.css';

type Props = {
	image?: string;
	label?: string;
	color?: string;
	className?: string;
};

export const ImageOrLetter: React.FC<Props> = ({ image, label: username, color, className }) => {
	let content = null;

	if (image) {
		content = <img className={styles.icon} src={image} />;
	} else if (username) {
		content = (
			<div className={styles.icon} style={{ backgroundColor: color || 'white' }}>
				{username[0].toUpperCase()}
			</div>
		);
	}

	return <div className={bem(className, styles.container)}> {content}</div>;
};
