import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';

type TProps = {
  song: TSearchedSong;
};

export const SearchedSongDetails: FC<TProps> = ({}) => {
  return <SText>Searched Song Details</SText>;
};

const SText = styled.Text`
  color: white;
`;
