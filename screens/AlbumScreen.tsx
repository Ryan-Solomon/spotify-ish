import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../graphql/queries';

import styled from 'styled-components/native';
import { SongItem } from '../components/SongItem';
import { TSong } from '../types';
import { AlbumHeader } from './../components/AlbumHeader';

type TRoute = {
  key: string;
  name: string;
  params: {
    id: string;
  };
};

type TStatus = 'PENDING' | 'IDLE' | 'FULFILLED' | 'ERROR';

export const AlbumScreen = () => {
  const [songs, setSongs] = useState<TSong[]>([]);
  const [status, setStatus] = useState<TStatus>('IDLE');
  const {
    params: { id: albumId },
  } = useRoute<TRoute>();

  useEffect(() => {
    const getAlbumSongs = async () => {
      setStatus('PENDING');
      try {
        const songData = (await API.graphql(
          graphqlOperation(getAlbum, { id: albumId })
        )) as any;
        setStatus('FULFILLED');
        setSongs(songData.data.getAlbum.songs.items as TSong[]);
      } catch (e) {
        setStatus('ERROR');
      }
    };
    getAlbumSongs();
  }, []);

  if (status === 'PENDING') return <SText>Loading...</SText>;
  // Todo -- Redirect to an actual error page
  if (status === 'ERROR') return <SText>Oops, something went wrong</SText>;

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
