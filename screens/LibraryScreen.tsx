import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { API, graphqlOperation } from 'aws-amplify';
import { TSong } from '../types';
import { listSongs } from '../graphql/queries';

export const LibraryScreen = () => {
  const [songs, setSongs] = useState<TSong[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        // @ts-ignore
        const { data } = await API.graphql(graphqlOperation(listSongs));
        console.log('_____________________________________');
        console.log(data.listSongs.items);
      } catch {}
    };
    fetchSongs();
  }, []);

  return <SText>Library Songs</SText>;
};

const SText = styled.Text`
  color: white;
`;
