import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { AlbumCategory } from '../components/AlbumCategory';
import albumData from '../assets/data/albumCategories';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../graphql/queries';

export default function HomeScreen() {
  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        console.log(data);
      } catch {}
    };
  }, []);

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
    </SHomeContainer>
  );
}

const SHomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
