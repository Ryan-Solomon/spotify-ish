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
      <SBtn>
        <SText fontSize='16px'>PLAY</SText>
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
  background-color: #2c912c;
  padding: 6px;
  border-radius: 15px;
  width: 150px;
  align-items: center;
  margin-top: 10px;
`;
