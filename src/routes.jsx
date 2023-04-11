// react
import { Route, Routes } from 'react-router-dom';
// utils
import axios from 'axios';
// pages
import Dashboard from './pages/Dashboard';
import TestPage from './pages/TestPage';
import PageNotFound from './pages/404';
import Patients from './pages/Patients';
import Login from './pages/Signin';
// layout
import Layout from './layout/Layout';
// middleware
import PrivateRoute from './middleware/PrivateRoute';
// hooks
import { useAuth } from './hooks/useAuth';

// ----------------------------------------------------------------------

export default function Router() {
  const { token } = useAuth();
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="testpage" element={<PrivateRoute><TestPage /></PrivateRoute>} />
        <Route path="patients" element={<PrivateRoute><Patients /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}
