import { bem } from '@utils';

import styles from './Button.module.css';

type Props = {
	mode?: 'primary' | 'secondary';
	className?: string;
	children: React.ReactNode;
	onClick: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Button: React.FC<Props> = ({ children, mode, className, onClick }) => {
	return (
		<button onClick={onClick} className={bem(className, styles.button)}>
			<div className={bem(styles.container, mode !== 'primary' ? styles.primary : styles.secondary)}>
				{children}
			</div>
		</button>
	);
};
