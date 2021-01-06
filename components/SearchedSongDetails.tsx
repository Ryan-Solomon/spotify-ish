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
      <SDetailsContainer>
        <SText fontSize='22px'>Song Details</SText>
        <SText fontColor='#d5d3d3'>Album: {strAlbum}</SText>
        <SText fontColor='#d5d3d3'>Track: {strTrack}</SText>
        <SText fontColor='#d5d3d3'>Artist: {strArtist}</SText>
        <SText fontColor='#d5d3d3'>Genre: {strGenre}</SText>
        <SText fontColor='#d5d3d3'>Mood: {strMood}</SText>
        <SText fontColor='#d5d3d3'>Plays: {intTotalPlays}</SText>
      </SDetailsContainer>
      <SDescContainer>
        <SText fontSize='22px'>Description</SText>
        <SText fontColor='#d5d3d3'>{strDescriptionEN}</SText>
      </SDescContainer>
    </SContainer>
  );
};

const SContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding: 30px;
`;

type TextProps = {
  fontSize: string;
  fontColor: string;
};

const SText = styled.Text<Partial<TextProps>>`
  color: ${({ fontColor }) => fontColor || 'white'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  margin-bottom: 3px;
`;

const SDetailsContainer = styled.View``;
const SDescContainer = styled.View``;
