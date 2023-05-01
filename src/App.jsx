import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { UserProvider } from './hooks/useAuth';
import ScrollToTop from './components/ScrollToTop';
import Router from './routes';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <ScrollToTop />
          <Router />
        </UserProvider>
      </BrowserRouter>
    </Provider>
  );
}
