import React from 'react';
import { View, Text } from 'react-native';

import styled from 'styled-components/native';

export const AlbumScreen = () => {
  return (
    <SContainer>
      <SText>Album Screen</SText>
    </SContainer>
  );
};

const SContainer = styled.View``;

const SText = styled.Text`
  color: #dadada;
`;
