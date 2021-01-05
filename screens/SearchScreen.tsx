import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { API_KEY } from 'react-native-dotenv';

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

type status = 'IDLE' | 'FULFILLED' | 'PENDING' | 'REJECTED';

export default function TabTwoScreen() {
  const [textInput, setTextInput] = useState('');
  const [searchedSong, setSearchSong] = useState<TSearchedSong | null>(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const searchSong = async () => {
      try {
        const data = fetch(
          'https://theaudiodb.p.rapidapi.com/searchtrack.php?s=coldplay&t=yellow',
          {
            method: 'GET',
            headers: {
              'x-rapidapi-key': API_KEY,
              'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
            },
          }
        );
      } catch (E) {}
    };
    searchSong();
  }, [searchText]);

  return (
    <SContainer>
      <STextInput
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
