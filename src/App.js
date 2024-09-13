import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr/>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
