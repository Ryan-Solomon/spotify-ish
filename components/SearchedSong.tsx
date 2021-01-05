import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';

type TProps = {
  song: TSearchedSong;
};

export const SearchedSong: FC<TProps> = ({ song: { strTrack } }) => {
  return (
    <SContainer>
      <SText>{strTrack}</SText>
    </SContainer>
  );
};

const SContainer = styled.View``;

const SText = styled.Text``;
