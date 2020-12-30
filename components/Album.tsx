import React, { FC } from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

type TProps = {
  albumID: string;
  imageURI: string;
  artistsHeadline: string;
};

export const Album: FC<TProps> = ({ albumID, imageURI, artistsHeadline }) => {
  return (
    <StyledAlbumContainer>
      {/* <StyledBackgroundImage  /> */}
    </StyledAlbumContainer>
  );
};

const StyledAlbumContainer = styled.View`
  width: 200px;
  height: 200px;
  background-color: white;
`;

const StyledBackgroundImage = styled.ImageBackground``;
