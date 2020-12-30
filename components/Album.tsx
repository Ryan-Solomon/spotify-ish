import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const DefaultImage = require('../assets/images/album-cover-1.jpg');

type TProps = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
};

export const Album: FC<Partial<TProps>> = ({
  id,
  imageUri = DefaultImage,
  artistsHeadline = 'Mumford & Sons, X Ambassadors, and more',
}) => {
  return (
    <SAlbumContainer>
      <Image style={styles.backgroundImage} source={imageUri} />
      <SAlbumText>{artistsHeadline}</SAlbumText>
    </SAlbumContainer>
  );
};

// Styles

const SAlbumContainer = styled.View`
  width: 200px;
  height: 250px;
  padding: 10px;
  background-color: #222;
`;

const SAlbumText = styled.Text`
  margin-top: 10px;
  color: grey;
`;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 175,
    resizeMode: 'cover',
  },
});
