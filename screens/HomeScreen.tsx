import React from 'react';
import { Album } from '../components/Album';
import styled from 'styled-components/native';
import { AlbumCategory } from '../components/AlbumCategory';
import albumData from '../assets/data/albumCategories';
const { id, title, albums } = albumData[0];

export default function HomeScreen() {
  return (
    <SHomeContainer>
      <AlbumCategory id={id} title={title} albums={albums} />
    </SHomeContainer>
  );
}

const SHomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
