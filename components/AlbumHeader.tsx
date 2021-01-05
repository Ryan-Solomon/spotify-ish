import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useAppContext } from '../context/appContext';
import { TSong } from '../types';

export type TAlbum = {
  album: {
    by: string;
    id: string;
    imageUri: string;
    name: string;
    numberOfLikes: string;
  };
  firstSong: TSong;
};

export const AlbumHeader: FC<TAlbum> = ({
  album: { by, id, imageUri, name, numberOfLikes },
  firstSong,
}) => {
  const { setCurrentSong } = useAppContext();
  return (
    <SAlbumHeaderContainer>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <SText fontSize='22px'>{name}</SText>
      <SText fontSize='14px' fontColor='grey'>
        By {by} {numberOfLikes} likes
      </SText>
      <SBtn>
        <SPlayBtn onPress={() => setCurrentSong(firstSong)}>
          <SText fontSize='16px'>PLAY</SText>
        </SPlayBtn>
      </SBtn>
    </SAlbumHeaderContainer>
  );
};

// Styles

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10,
  },
});

const SAlbumHeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

type STextProps = {
  fontSize: string;
  fontColor: string;
};

const SText = styled.Text<Partial<STextProps>>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ fontColor }) => fontColor || 'white'};
  margin: 3px 0;
`;

const SBtn = styled.TouchableOpacity`
  background-color: #599e59;
  padding: 6px;
  border-radius: 15px;
  width: 150px;
  align-items: center;
  margin-top: 10px;
`;

const SPlayBtn = styled.TouchableOpacity``;
