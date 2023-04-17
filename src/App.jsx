import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeProvider from './theme';
import { UserProvider } from './hooks/useAuth';
import ScrollToTop from './components/ScrollToTop';
import Router from './routes';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ThemeProvider>
            <UserProvider>
              <ScrollToTop />
              <Router />
            </UserProvider>
          </ThemeProvider>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
