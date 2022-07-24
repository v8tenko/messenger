import { createRoot } from 'react-dom/client';

import { App } from './App';
import './index.css';

const appHeight = () => {
	document.documentElement.style.setProperty('--fill-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', appHeight);
appHeight();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
