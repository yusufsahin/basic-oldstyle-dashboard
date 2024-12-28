import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from '../features/dashboard/Dashboard';
import Forms from '../features/forms/Forms';
import Tables from '../features/tables/Tables';
import Analytics from '../features/analytics/Analytics';
import Login from '../features/auth/Login';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="forms" element={<Forms />} />
          <Route path="tables" element={<Tables />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

