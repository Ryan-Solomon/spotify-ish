import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';
import { Image, StyleSheet } from 'react-native';

type TProps = {
  song: TSearchedSong;
  resetSong: () => void;
};

export const SearchedSong: FC<TProps> = ({
  song: { strTrack, strTrackThumb, strAlbum },
  resetSong,
}) => {
  return (
    <SContainer>
      <SText fontSize='28px'>{strTrack}</SText>
      <Image style={styles.image} source={{ uri: strTrackThumb }} />
      <SBtnContainer>
        <SBtn>
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

const SContainer = styled.View`
  padding: 8px;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
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
