import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSong } from '../types';
import { Image } from 'react-native';

type TProps = {
  song: TSong;
};

export const SongItem: FC<TProps> = ({ song: { imageUri, artist, title } }) => {
  return (
    <SContainer>
      <SImageContainer>
        <Image source={imageUri} />
      </SImageContainer>
      <STextContainer>
        <SText>{title}</SText>
        <SText>{artist}</SText>
      </STextContainer>
      <SText>Song Item</SText>
    </SContainer>
  );
};

// Styles

const SContainer = styled.View``;
const SImageContainer = styled.View``;
const STextContainer = styled.View``;

type STextProps = {
  fontSize: string;
  fontColor: string;
};

const SText = styled.Text<Partial<STextProps>>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ fontColor }) => fontColor || 'white'};
`;
