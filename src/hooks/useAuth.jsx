import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apis from '../services/api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    const data = {
      username,
      password,
    };
    await axios
      .post(apis.employee.loginEmployee, data)
      .then((response) => {
        setToken(response.data.token);

        sessionStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.message);
      });
  };

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const value = useMemo(
    () => ({
      token,
      error,
      login,
      logout,
    }),
    [token, error],
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
