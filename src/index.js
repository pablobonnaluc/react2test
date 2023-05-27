import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './index.css';
import App from './App';
import Layout from './pages/layout';
import Tareas from './components/tareas';
import Contacts from './pages/contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
              path="/tareas" 
              element={<Tareas />} >
          </Route>
          <Route 
              path="/contacts" 
              element={<Contacts />} >
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


