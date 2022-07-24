export type ChatCardParameters = {
	image?: string;
	color?: string;
	id: string;
	label: string;
	lastMessage: string;
};

export type ChatList = {
	chats: ChatCardParameters[];
};
