import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Theme from './themes/Theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ProSidebarProvider>
			<Theme>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
				  <App />
        </LocalizationProvider>
			</Theme>
		</ProSidebarProvider>
	</React.StrictMode>,
);
