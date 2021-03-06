import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Leandro Cruz</h1>
        <h2>@leandro_cruz</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            La Serena, Chile
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 25 de abril de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
