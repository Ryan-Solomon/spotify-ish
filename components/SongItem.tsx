import React from 'react';
import styled from 'styled-components/native';

export const SongItem = () => {
  return (
    <SContainer>
      <SText>Song Item</SText>
    </SContainer>
  );
};

const SContainer = styled.View``;

const SText = styled.Text`
  color: white;
`;
