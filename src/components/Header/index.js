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
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="sobre">Sobre</Link>
        </li>
        <li>
          <Link to="historia">História</Link>
        </li>
        <li>
          <Link to="projetos">Projetos</Link>
        </li>
      </ul>
    </Container>
  );
}
