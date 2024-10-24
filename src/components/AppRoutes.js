import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Background from '../pages/Background';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/background" element={<Background />} />
    </Routes>
  );
}

export default AppRoutes;
