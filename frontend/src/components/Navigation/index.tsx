import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';

import { assert, bem } from '@utils';

import { tabsNavigation } from './navigation';

import styles from './Navigation.module.css';

type Props = {
	className?: string;
	labels: string[];
	children: React.ReactNode;
};

export const Navigation: React.FC<Props> = observer(({ labels, className, children }) => {
	const navigationStore = useMemo(
		() =>
			tabsNavigation({
				tabs: React.Children.toArray(children)
			}),
		[children]
	);

	assert(labels.length === navigationStore.tabs.length);

	return (
		<div className={bem(styles.container, className)}>
			{navigationStore.activeTab}
			<div className={styles.navigation}>
				{labels.map((el, index) => {
					return (
						<div
							key={el}
							onClick={() => navigationStore.changeTab(index)}
							className={bem(styles.label, index === navigationStore.activeIndex && styles.active)}
						>
							{el}
						</div>
					);
				})}
			</div>
		</div>
	);
});
