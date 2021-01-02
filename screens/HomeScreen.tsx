import React from 'react';
import styled from 'styled-components/native';
import { AlbumCategory } from '../components/AlbumCategory';
import albumData from '../assets/data/albumCategories';
import { FlatList } from 'react-native';
import { PlayerWidget } from '../components/PlayerWidget';

export default function HomeScreen() {
  return (
    <SHomeContainer>
      <FlatList
        data={albumData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { id, title, albums } = item;
          return <AlbumCategory id={id} title={title} albums={albums} />;
        }}
      />
      <PlayerWidget />
    </SHomeContainer>
  );
}

const SHomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
