import React from 'react';

import { Container, Title, TitleInfo } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Pokédex</Title>
      <TitleInfo>
        Search for Pokémon by name or using the National Pokédex number.
      </TitleInfo>
    </Container>
  );
};

export default Dashboard;
