import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Theme from './themes/Theme';
import { ProSidebarProvider } from 'react-pro-sidebar';
//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ProSidebarProvider>
			<Theme>
				<Provider store={store}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<App />
					</LocalizationProvider>
				</Provider>
			</Theme>
		</ProSidebarProvider>
	</React.StrictMode>,
);
