import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import TheCast from './pages/TheCast';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

// scss
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cast" element={<TheCast/>} />
            <Route path="/locations" element={<Locations/>} />
            <Route path="/episodes" element={<Episodes/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;