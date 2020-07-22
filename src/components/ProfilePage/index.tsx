import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar /> 
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Victor Rosas</h1>
        <h2>@ihvictor</h2>

        <p>
          Developer at <a href="https://www.linkedin.com/in/victor-rosas-3b2295123/">NoneTech</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santo André, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 17 de abril de 1996
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
}

export default ProfilePage;