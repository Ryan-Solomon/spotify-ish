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
  const [textInput, setTextInput] = useState('');
  const [searchedSong, setSearchSong] = useState<TSearchedSong | null>(null);
  const [searchText, setSearchText] = useState('');
  const [status, setStatus] = useState<TStatus>('IDLE');

  useEffect(() => {
    const searchSong = async () => {
      setStatus('PENDING');
      try {
        const res = await fetch(
          `https://theaudiodb.p.rapidapi.com/searchtrack.php?s=coldplay&t=${searchText.toLowerCase()}`,
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
    };
    searchSong();

    return () => setStatus('IDLE');
  }, [searchText]);

  return (
    <SContainer>
      <STextInput
        onSubmitEditing={() => setSearchText(textInput)}
        onChangeText={(text) => setTextInput(text)}
        value={textInput}
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
