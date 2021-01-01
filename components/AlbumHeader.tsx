import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const AlbumHeader: FC = ({}) => {
  return (
    <SAlbumHeaderContainer>
      <SText>Header</SText>
    </SAlbumHeaderContainer>
  );
};

// Styles

const SAlbumHeaderContainer = styled.View``;

const SText = styled.Text`
  color: white;
`;
