
import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import HomePage from './components2/HomePage';
import CustomizationPage from './components2/CustomizationPage';
import Footer from './components/Footer';

function App() {

	return (
		<div className="App">
			<Theme
				appearance='light'
				accentColor='grass'
				panelBackground='translucent'>
				<FrappeProvider
					socketPort={import.meta.env.VITE_SOCKET_PORT}
					siteName={import.meta.env.VITE_SITE_NAME}
				>
					{/* <Overview /> */}
					<div className='flex flex-col gap-1'>
						<HomePage />
						<CustomizationPage />
						<Footer />
						{/* <Overview /> */}
					</div>
				</FrappeProvider>
			</Theme>
		</div>
	)
}

export default App
