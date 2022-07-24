import { observer } from 'mobx-react-lite';

import { Input } from '@components';

import { Field } from '../../types';

import styles from './FieldInput.module.css';

type FieldInputProps = {
	field: Field<string>;
};

type Props = FieldInputProps & Omit<React.ComponentProps<typeof Input>, keyof FieldInputProps | 'value' | 'onChange'>;

export const FieldInput: React.FC<Props> = observer(({ field, ...rest }) => {
	return (
		<div className={styles.container}>
			<Input className={styles.input} value={field.value || ''} onChange={field.onChange} {...rest} />
			<span className={styles.error}>{field.error}</span>
		</div>
	);
});
