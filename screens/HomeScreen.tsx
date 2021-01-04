import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { AlbumCategory } from '../components/AlbumCategory';
import albumData from '../assets/data/albumCategories';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../graphql/queries';

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        // @ts-ignore
        const { data } = await API.graphql(
          graphqlOperation(listAlbumCategorys)
        );
        setCategories(data.listAlbumCategorys.items);
        console.log(data.listAlbumCategorys.items);
      } catch {}
    };
    fetchAlbumCategories();
  }, []);

  return (
    <SHomeContainer>
      {categories?.length > 0 && (
        <FlatList
          data={categories}
          // @ts-ignore
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const { id, title, albums } = item;
            return (
              // @ts-ignore
              <AlbumCategory id={id} title={title} albums={albums.items} />
            );
          }}
        />
      )}
    </SHomeContainer>
  );
}

const SHomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
