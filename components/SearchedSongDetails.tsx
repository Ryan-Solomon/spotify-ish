import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';
import { useAppContext } from '../context/appContext';
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
  const { currentSong } = useAppContext();
  return (
    <SContainer>
      <SDetailsContainer>
        <SText fontSize='20px'>Song Details</SText>
        <SText fontColor='#d5d3d3'>Album: {strAlbum}</SText>
        <SText fontColor='#d5d3d3'>Track: {strTrack}</SText>
        <SText fontColor='#d5d3d3'>Artist: {strArtist}</SText>
        <SText fontColor='#d5d3d3'>Genre: {strGenre}</SText>
        <SText fontColor='#d5d3d3'>Mood: {strMood}</SText>
        <SText fontColor='#d5d3d3'>Plays: {intTotalPlays}</SText>
      </SDetailsContainer>
      <SDescContainer>
        <SText fontSize='20px'>Description</SText>
        <SText fontColor='#d5d3d3'>{strDescriptionEN}</SText>
      </SDescContainer>
      <SBtnContainer>
        <SBtn onPress={showDetailsCB}>
          <SText fontSize='10px'>Previous</SText>
          <SText fontSize='10px'>Page</SText>
        </SBtn>
        <SBtn onPress={resetSong}>
          <SText fontSize='10px'>Search More</SText>
          <SText fontSize='10px'>Songs</SText>
        </SBtn>
      </SBtnContainer>
    </SContainer>
  );
};

const SContainer = styled.View`
  height: 88%;
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
  margin: 10px;
`;

const SBtnContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  align-self: center;
  position: absolute;
  right: 0;
  left: 150;
  bottom: 400;
`;
