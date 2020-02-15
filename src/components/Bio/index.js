import React from 'react';

import { Container } from './styles';

export default function Bio() {
  return (
    <Container>
      <img src="https://avatars2.githubusercontent.com/u/15862643?v=4" className="avatar" alt="avatar" />
      <div>
        <h2>Catharina Mesquita</h2>
        <h4>Desenvolvedora de Software - Teresina - São Paulo</h4>
        <p className="bio">Programo desde 2013. Sou dedicada, determinada e adoro desafios. Estou sempre me atualizando e procuro melhorar sempre minhas habilidades, tanto profissional com pessoal. Procuro sempre por melhorias no ambiente em que estou inserida e fazer parte da mudança. Procuro entender os problemas e discutir as melhores soluções. No mais, sou simples, gosto de trabalhar em um ambiente saudável e que haja princípios internos sólidos, sou curiosa e sempre busco melhorar.</p>
      </div>
    </Container>
  );
}
