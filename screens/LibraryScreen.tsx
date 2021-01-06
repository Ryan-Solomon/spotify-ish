import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { API, graphqlOperation } from 'aws-amplify';
import { TSong } from '../types';
import { listSongs } from '../graphql/queries';
import { FlatList } from 'react-native-gesture-handler';
import { SongItem } from '../components/SongItem';

type TStatus = 'IDLE' | 'REJECTED' | 'FULFILLED' | 'PENDING';

export const LibraryScreen = () => {
  const [songs, setSongs] = useState<TSong[]>([]);
  const [status, setStatus] = useState<TStatus>('IDLE');

  useEffect(() => {
    const fetchSongs = async () => {
      setStatus('PENDING');
      try {
        // @ts-ignore
        const { data } = await API.graphql(graphqlOperation(listSongs));
        if (data.listSongs.items.length > 0) {
          setSongs(data.listSongs.items);
          setStatus('FULFILLED');
        } else {
          setStatus('REJECTED');
        }
      } catch {
        setStatus('REJECTED');
      }
    };
    fetchSongs();
  }, []);

  if (status === 'PENDING') return <SText>Getting Songs...</SText>;
  if (status === 'REJECTED' || !songs)
    return <SText>Something went wrong.</SText>;

  return (
    <SContainer>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <SongItem song={item} />;
        }}
      />
    </SContainer>
  );
};

const SText = styled.Text`
  color: white;
`;

const SContainer = styled.View``;
