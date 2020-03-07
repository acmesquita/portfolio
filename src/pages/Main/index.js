import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';

import { Container } from './styles';

export default function Main() {
  const { pathname } = useLocation()
  function show() {
    return pathname !== "/"
  }
  return (
    <>
      <Header />
      <Container>
        {show() ? <Outlet /> : <h1>Olá</h1>}
      </Container>
    </>
  );
}
