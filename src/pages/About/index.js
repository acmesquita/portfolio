import React from 'react';

import { Container } from './styles';
import Bio from '../../components/Bio';
import Timeline from '../../components/Timeline';

export default function About() {
  return (
    <Container>
      <Bio />
      <Timeline />
    </Container>
  );
}
