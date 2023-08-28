import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import TheCast from './pages/TheCast';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import CastDetails from './pages/CastDetails';

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
            <Route path="/cast/:id" element={<CastDetails/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;