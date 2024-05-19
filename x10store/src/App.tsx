
import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Overview';

function App() {

	return (
		<div className="App">
			<Theme
				appearance='light'
				accentColor='indigo'
				panelBackground='translucent'>
				<FrappeProvider
					socketPort={import.meta.env.VITE_SOCKET_PORT}
					siteName={import.meta.env.VITE_SITE_NAME}
				>
					<Navbar />
				</FrappeProvider>
			</Theme>
		</div>
	)
}

export default App
