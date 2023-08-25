import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';

// scss
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;