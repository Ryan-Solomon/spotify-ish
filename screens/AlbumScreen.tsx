import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';
import { SongItem } from '../components/SongItem';
import { TSong } from '../types';
const DefaultImage = require('../assets/images/album-cover-1.jpg');

const song: TSong = {
  id: '1',
  imageUri: DefaultImage,
  artist: 'Taylor Swift',
  title: 'Willow',
};

export const AlbumScreen = () => {
  return (
    <SContainer>
      <SongItem song={song} />
    </SContainer>
  );
};

const SContainer = styled.View``;

const SText = styled.Text`
  color: #dadada;
`;
