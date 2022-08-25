import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from '@pages/FirstPage';
import SecondPage from '@pages/SecondPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/FirstPage" element={<FirstPage />} />
      <Route path="/SecondPage" element={<SecondPage />} />
    </Routes>
  );
}

export default Router;
