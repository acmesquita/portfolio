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
        <small>Desenvolvedora de Software - Teresina - São Paulo</small>
      </div>
      <ul>
        <li>
          <Link to="about">Sobre</Link>
        </li>
        <li>
          <Link to="projects">Projetos</Link>
        </li>
      </ul>
    </Container>
  );
}
