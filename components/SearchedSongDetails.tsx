import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';

type TProps = {
  song: TSearchedSong;
  showDetailsCB: () => void;
  resetSong: () => void;
};

export const SearchedSongDetails: FC<TProps> = ({
  song,
  showDetailsCB,
  resetSong,
}) => {
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
      <SBtnContainer>
        <SBtn onPress={showDetailsCB}>
          <SText fontSize='12px'>Previous</SText>
          <SText fontSize='12px'>Page</SText>
        </SBtn>
        <SBtn onPress={resetSong}>
          <SText fontSize='12px'>Search More</SText>
          <SText fontSize='12px'>Songs</SText>
        </SBtn>
      </SBtnContainer>
    </SContainer>
  );
};

const SContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding: 30px;
  padding-bottom: 10px;
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

const SDetailsContainer = styled.View`
  margin-bottom: 10px;
`;
const SDescContainer = styled.View``;

const SBtn = styled.TouchableOpacity`
  border: 1px solid white;
  padding: 8px;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const SBtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  align-self: center;
`;
