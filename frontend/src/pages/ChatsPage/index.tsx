import { RequiresAuth } from '@utils';

const ChatsPagePure: React.FC = () => {
	return <> </>;
};

export const ChatsPage = () => <RequiresAuth component={<ChatsPagePure />} />;
