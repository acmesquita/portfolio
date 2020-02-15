import React from 'react';
import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';

export default function MainRoutes() {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/about" element={<About />} />
      </Route>

      <Route path="*" element={<h1>Not found - <button onClick={() => navigate('/')} >back</button> </h1>} />
    </Routes>
  )
}