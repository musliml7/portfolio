import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import Projects from './components/Projects';

import './components/Res.css'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
