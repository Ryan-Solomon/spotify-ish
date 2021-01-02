import React from 'react';

import styled from 'styled-components/native';
import { TSong } from '../types';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DefaultImage = require('../assets/images/album-cover-1.jpg');

const song: TSong = {
  id: '1',
  imageUri: DefaultImage,
  artist: 'Taylor Swift',
  title: 'Willow',
};

export const PlayerWidget = () => {
  const { imageUri, artist, title } = song;
  return (
    <SContainer>
      <SImageContainer>
        <Image style={styles.image} source={imageUri as ImageSourcePropType} />
      </SImageContainer>
      <STextContainer>
        <SText fontSize='18px'>{title}</SText>
        <SText fontColor='#dadada' fontSize='12px'>
          {artist}
        </SText>
      </STextContainer>
      <SIconContainer>
        <AntDesign name='hearto' size={30} color='white' />
        <Entypo name='controller-play' size={30} color='white' />
      </SIconContainer>
    </SContainer>
  );
};

// Styles

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    resizeMode: 'cover',
  },
});

const SContainer = styled.View`
  flex-direction: row;
  padding: 6px;
  position: absolute;
  bottom: 0px;
  background-color: #181818;
  width: 100%;
  border-bottom-width: 2px;
  border-color: black;
  align-items: center;
`;

const SIconContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: 10px;
  padding: 5px;
  justify-content: space-between;
  width: 86px;
`;

const SImageContainer = styled.View`
  margin: 8px;
`;
const STextContainer = styled.View`
  margin: 8px;
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
