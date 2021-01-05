import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchedSong } from '../screens/SearchScreen';
import { Image, StyleSheet } from 'react-native';

type TProps = {
  song: TSearchedSong;
};

export const SearchedSong: FC<TProps> = ({
  song: { strTrack, strTrackThumb },
}) => {
  return (
    <SContainer>
      <SText>{strTrack}</SText>
      <Image style={styles.image} source={{ uri: strTrackThumb }} />
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: 50,
    width: 50,
  },
});

const SContainer = styled.View``;

const SText = styled.Text``;
