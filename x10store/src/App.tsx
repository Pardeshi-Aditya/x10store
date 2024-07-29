import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Theme
        appearance='inherit'
        accentColor='yellow'
        panelBackground='translucent'>
        <FrappeProvider
          socketPort={import.meta.env.VITE_SOCKET_PORT}
          siteName={import.meta.env.VITE_SITE_NAME}
        >
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/newpage" element={
                <div className='flex justify-center items-center text-9xl'>
                  Here's new page
                </div>
              } />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </FrappeProvider>
      </Theme>
    </div>
  )
}

export default App