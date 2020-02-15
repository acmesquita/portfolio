import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <h1>
          Catharina Mesquita
        </h1>
        <small>Desenvolvedora</small>
      </div>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="github">GitHub</Link>
        </li>
      </ul>
    </Container>
  );
}
