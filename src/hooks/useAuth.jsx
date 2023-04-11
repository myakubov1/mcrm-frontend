import {
  createContext, useContext, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApiUrl } from '../services/api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const [roles, setRoles] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    const data = {
      username,
      password,
    };
    console.log(data);
    await axios
      .post(`${ApiUrl}/employee/login`, data)
      .then((response) => {
        console.log(response);
        setToken(response.data.token);
        setRoles(response.data.roles);

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
    setRoles(null);
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const value = useMemo(
    () => ({
      token,
      roles,
      error,
      login,
      logout,
    }),
    [token, roles, error],
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
