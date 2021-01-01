import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSong } from '../types';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type TProps = {
  song: TSong;
};

export const SongItem: FC<TProps> = ({ song: { imageUri, artist, title } }) => {
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
