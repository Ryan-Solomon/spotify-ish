import React from 'react';
import { Album } from '../components/Album';
import styled from 'styled-components/native';

export default function TabOneScreen() {
  return (
    <SHomeContainer>
      <Album />
    </SHomeContainer>
  );
}

const SHomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
