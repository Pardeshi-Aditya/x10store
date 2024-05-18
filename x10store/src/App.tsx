import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Overview';

function App() {
	const [count, setCount] = useState(0)

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
