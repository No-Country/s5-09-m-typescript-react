import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Theme from './themes/Theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ProSidebarProvider>
			<Theme>
				<App />
			</Theme>
		</ProSidebarProvider>
	</React.StrictMode>,
);
