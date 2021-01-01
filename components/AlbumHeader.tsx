import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const AlbumHeader: FC = ({}) => {
  return (
    <SAlbumHeaderContainer>
      <Image
        source={require('../assets/images/album-cover-1.jpg')}
        style={styles.image}
      />
      <SText fontSize='22px'>Workout</SText>
      <SText fontSize='14px' fontColor='grey'>
        By Spotify 124 likes
      </SText>
    </SAlbumHeaderContainer>
  );
};

// Styles

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

const SAlbumHeaderContainer = styled.View``;

type STextProps = {
  fontSize: string;
  fontColor: string;
};

const SText = styled.Text<Partial<STextProps>>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ fontColor }) => fontColor || 'white'};
  margin: 3px 0;
`;
