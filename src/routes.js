import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Page404 from './pages/Page404';

export default function MainRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}