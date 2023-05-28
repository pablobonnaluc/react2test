import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './index.css';
import App from './App';
import Tasks from './components/tasks';
import Contacts from './pages/contacts';
import Layout from './pages/layout';
import User from './pages/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route 
              path="/tasks" 
              element={<Tasks />} >
          </Route>
          <Route 
              path="/contacts" 
              element={<Contacts />} >
          </Route>
          <Route 
              path="/user" 
              element={<User />} >
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


