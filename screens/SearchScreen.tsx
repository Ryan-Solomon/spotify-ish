import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
// @ts-ignore
import { API_KEY } from '@env';

type TSearchedSong = {
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
  const [songName, setSongName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [songText, setSongText] = useState('');
  const [artistText, setArtistText] = useState('');
  const [searchedSong, setSearchSong] = useState<TSearchedSong | null>(null);
  const [status, setStatus] = useState<TStatus>('IDLE');

  useEffect(() => {
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
        if (status === 'IDLE') return;

        console.log(data);
      } catch (E) {
        setStatus('REJECTED');
      }
      setSongText('');
      setArtistText('');
    };
    searchSong();

    return () => setStatus('IDLE');
  }, [songName, artistName]);

  const updateSearchTerms = () => {
    setSongName(songText);
    setArtistName(artistText);
  };

  return (
    <SContainer>
      <STextInput
        onChangeText={(text) => setArtistText(text)}
        value={artistText}
        selectionColor='#25ff08'
        enablesReturnKeyAutomatically={true}
        clearTextOnFocus={true}
        blurOnSubmit={true}
        autoCorrect={false}
        placeholder='Artist Name'
      />
      <STextInput
        onSubmitEditing={updateSearchTerms}
        onChangeText={(text) => setSongText(text)}
        value={songText}
        selectionColor='#25ff08'
        enablesReturnKeyAutomatically={true}
        clearTextOnFocus={true}
        blurOnSubmit={true}
        autoCorrect={false}
        placeholder='Search a song'
      />
    </SContainer>
  );
}

const SContainer = styled.View`
  align-items: center;
  padding: 3px;
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
