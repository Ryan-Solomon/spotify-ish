import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';
import { SongItem } from '../components/SongItem';

export const AlbumScreen = () => {
  return (
    <SContainer>
      <SText>Album Screen</SText>
      <SongItem />
    </SContainer>
  );
};

const SContainer = styled.View``;

const SText = styled.Text`
  color: #dadada;
`;
