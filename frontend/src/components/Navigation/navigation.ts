import { makeAutoObservable } from 'mobx';

type NavigationStore = {
	tabs: React.ReactNode[];
	activeTab: React.ReactNode;
	activeIndex: number;
	changeTab(newTab: number): void;
};

export const tabsNavigation = ({
	tabs,
	initial,
	onTabChange
}: {
	tabs: React.ReactNode[];
	initial?: number;
	onTabChange?: (newTab: number) => void;
}): NavigationStore => {
	const navigation = {
		tabs,
		activeIndex: initial || 0,
		activeTab: tabs[initial || 0],
		changeTab(newTab: number) {
			onTabChange?.(newTab);
			navigation.activeTab = navigation.tabs[newTab];
			navigation.activeIndex = newTab;
		}
	};

	return makeAutoObservable(navigation);
};
