import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styled from 'styled-components/native';
import { SongItem } from '../components/SongItem';
import { TSong } from '../types';
import { AlbumHeader } from './../components/AlbumHeader';
const DefaultImage = require('../assets/images/album-cover-1.jpg');

const songs: TSong[] = [
  {
    id: '1',
    imageUri: DefaultImage,
    artist: 'Taylor Swift',
    title: 'Willow',
  },
  {
    id: '2',
    imageUri: DefaultImage,
    artist: 'Taylor Swift',
    title: 'Willow',
  },
  {
    id: '3',
    imageUri: DefaultImage,
    artist: 'Taylor Swift',
    title: 'Willow',
  },
  {
    id: '4',
    imageUri: DefaultImage,
    artist: 'Taylor Swift',
    title: 'Willow',
  },
  {
    id: '5',
    imageUri: DefaultImage,
    artist: 'Taylor Swift',
    title: 'Willow',
  },
  {
    id: '6',
    imageUri: DefaultImage,
    artist: 'Taylor Swift',
    title: 'Willow',
  },
];

type TRoute = {
  key: string;
  name: string;
  params: {
    id: string;
  };
};

export const AlbumScreen = () => {
  const {
    params: { id },
  } = useRoute<TRoute>();
  console.log(id);
  return (
    <SContainer>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <SongItem song={item} />;
        }}
        ListHeaderComponent={AlbumHeader}
      />
    </SContainer>
  );
};

const SContainer = styled.View``;

const SText = styled.Text`
  color: #dadada;
`;
