import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Index from '../Index'

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
        {show() ? <Outlet /> : <Index />}
      </Container>
    </>
  );
}

