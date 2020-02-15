import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Page404 from './pages/Page404';
import Projects from './pages/Projects';

export default function MainRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}