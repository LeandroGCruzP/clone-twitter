import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>
          {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo amet corporis fuga provident, voluptatem vitae veritatis laborum, quas magnam molestiae odit delectus ut minima necessitatibus sunt pariatur nemo, exercitationem asperiores.'.repeat(
            10
          )}
        </p>
      </Body>
    </Container>
  );
};

export default SideBar;
