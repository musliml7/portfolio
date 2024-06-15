import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Projects from './components/Projects';
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
