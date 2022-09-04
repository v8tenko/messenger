import { bem } from '@utils';

import styles from './ShuffleIcon.module.css';

type Props = {
	width?: string | number;
	height?: string | number;
	className?: string;
};

export const ShuffleIcon: React.FC<Props> = ({ width: widthInitial, height: heightInitial, className }) => {
	const { width, height } = {
		width: typeof widthInitial === 'number' ? `${widthInitial}px` : widthInitial || 16,
		height: typeof heightInitial === 'number' ? `${heightInitial}px` : heightInitial || 16
	};

	return (
		<div style={{ width, height }} className={bem(className, styles.container)}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
