import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
// @ts-ignore
import { API_KEY } from '@env';
import { SearchInput } from '../components/SerachInput';
import { SearchedSong } from '../components/SearchedSong';

export type TSearchedSong = {
  idTrack: string;
  intTotalPlays: number;
  strAlbum: string;
  strArtist: string;
  strDescriptionEN: string;
  strGenre: string;
  strMood: string;
  strTrack: string;
  strTrackThumb: string;
};

type TStatus = 'IDLE' | 'FULFILLED' | 'PENDING' | 'REJECTED';

export default function TabTwoScreen() {
  const [songName, setSongName] = useState<null | string>(null);
  const [artistName, setArtistName] = useState<null | string>(null);
  const [searchedSong, setSearchedSong] = useState<TSearchedSong | null>(null);
  const [status, setStatus] = useState<TStatus>('IDLE');

  useEffect(() => {
    if (!songName || !artistName) return;
    const searchSong = async () => {
      setStatus('PENDING');
      try {
        const res = await fetch(
          `https://theaudiodb.p.rapidapi.com/searchtrack.php?s=${artistName.toLowerCase()}&t=${songName.toLowerCase()}`,
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
            },
          }
        );
        const data = await res.json();
        if (data.track === null) {
          setStatus('REJECTED');
          return;
        }
        setSearchedSong(data.track[0]);
        setStatus('FULFILLED');
      } catch (E) {
        setStatus('REJECTED');
      }
      setSongName(null);
      setArtistName(null);
    };
    searchSong();
  }, [songName, setArtistName]);

  if (status === 'PENDING') return <SText>Getting Song..</SText>;
  if (status === 'REJECTED') return <SText>Something went wrong.</SText>;

  if (searchedSong) {
    return <SearchedSong song={searchedSong} />;
  }

  return (
    <SContainer>
      {artistName ? null : (
        <SearchInput
          onSubmitFn={setArtistName}
          placeholder='Artist Name'
          headerText='What artist would you like to search?'
        />
      )}
      {artistName && (
        <SearchInput
          onSubmitFn={setSongName}
          placeholder='Song Name'
          headerText='What song would you like to search?'
        />
      )}
    </SContainer>
  );
}

const SContainer = styled.View`
  align-items: center;
  padding: 3px;
  height: 30%;
  justify-content: space-evenly;
`;

const SText = styled.Text`
  color: white;
`;

const STextInput = styled.TextInput`
  color: #222;
  height: 50px;
  width: 90%;
  background-color: white;
  font-size: 22px;
  padding: 8px;
  border-radius: 5px;
`;
