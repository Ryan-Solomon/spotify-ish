import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';

type TProps = {
  song: TSearchedSong;
};

export const SearchedSongDetails: FC<TProps> = ({ song }) => {
  const {
    strAlbum,
    strGenre,
    strTrack,
    strMood,
    strDescriptionEN,
    intTotalPlays,
    strArtist,
  } = song;
  return (
    <SContainer>
      <SText>Album: {strAlbum}</SText>
      <SText>Track: {strTrack}</SText>
      <SText>Artist: {strArtist}</SText>
      <SText>Genre: {strGenre}</SText>
      <SText>Mood: {strMood}</SText>
      <SText>Plays: {intTotalPlays}</SText>
    </SContainer>
  );
};

const SContainer = styled.View`
  flex: 1;
`;

const SText = styled.Text`
  color: white;
`;
