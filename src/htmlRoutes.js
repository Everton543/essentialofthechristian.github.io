import React, { useEffect } from 'react';
import {HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Jornal from './pages/Jornal/Jornal';
import Jornals from './pages/Jornals/Jornals';

function HtmlRoutes(){

    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/Jornal/:id" element={<Jornal />} />
                <Route path="/Jornals" element={<Jornals />} />
            </Routes>
        </HashRouter>
    );
}

export default HtmlRoutes;
