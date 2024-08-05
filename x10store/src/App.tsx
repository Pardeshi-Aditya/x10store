import { FrappeProvider } from 'frappe-react-sdk'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import Model from './components/Model';

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
              <Route path="/model" element={<Model />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </FrappeProvider>
      </Theme>
    </div>
  )
}

export default App