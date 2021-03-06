import React, { FC } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { TAlbum } from '../types';
import { Album } from './Album';

export type TAlbumCategory = {
  id: string;
  title: string;
  albums: TAlbum[];
};

export const AlbumCategory: FC<TAlbumCategory> = ({ title, albums }) => {
  return (
    <SAlbumCategoryContainer>
      <STitle>{title}</STitle>
      <FlatList
        data={albums}
        keyExtractor={(albums) => albums.id}
        renderItem={({ item }) => {
          return (
            <Album
              imageUri={item.imageUri}
              id={item.id}
              artistsHeadline={item.artistsHeadline}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SAlbumCategoryContainer>
  );
};

// Styles

const SAlbumCategoryContainer = styled.View``;

const STitle = styled.Text`
  font-size: 30px;
  color: #dadada;
  margin: 10px;
`;
