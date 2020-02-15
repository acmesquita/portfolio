import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Page404() {
  return (
    <Container>
      <h1>404 - Not found</h1>
      <Link to="/">Volte para o início</Link>
    </Container>
  );
}
