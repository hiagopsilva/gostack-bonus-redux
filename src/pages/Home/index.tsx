import React from 'react';
import Welcome from '../../components/Welcome';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  );
};

export default Home;
