import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';
import { Image, StyleSheet } from 'react-native';
import { SearchedSongDetails } from './SearchedSongDetails';
import { useAppContext } from '../context/appContext';

type TProps = {
  song: TSearchedSong;
  resetSong: () => void;
};

export const SearchedSong: FC<TProps> = ({ song, resetSong }) => {
  const { strTrack, strTrackThumb } = song;
  const [showDetails, setShowDetails] = useState(false);
  const { currentSong } = useAppContext();

  const showDetailsCB = () => {
    setShowDetails(false);
  };

  if (showDetails) {
    return (
      <SearchedSongDetails
        resetSong={resetSong}
        showDetailsCB={showDetailsCB}
        song={song}
      />
    );
  }

  return (
    <SContainer height={currentSong ? '90%' : '100%'}>
      <SText fontSize='28px'>{strTrack}</SText>
      <Image style={styles.image} source={{ uri: strTrackThumb }} />
      <SBtnContainer>
        <SBtn onPress={() => setShowDetails(true)}>
          <SText>Show Song</SText>
          <SText>Details</SText>
        </SBtn>
        <SBtn onPress={resetSong}>
          <SText>Search More</SText>
          <SText>Songs</SText>
        </SBtn>
      </SBtnContainer>
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: 350,
    width: 350,
  },
});

type SContainerProps = {
  height: string;
};

const SContainer = styled.View<SContainerProps>`
  padding: 8px;
  justify-content: space-evenly;
  align-items: center;
  height: ${({ height }) => height};
`;

type TextProps = {
  fontSize: string;
  fontColor: string;
};

const SText = styled.Text<Partial<TextProps>>`
  color: ${({ fontColor }) => fontColor || 'white'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin-bottom: 6px;
  text-align: center;
`;

const SBtn = styled.TouchableOpacity`
  border: 1px solid white;
  padding: 10px;
`;

const SBtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
