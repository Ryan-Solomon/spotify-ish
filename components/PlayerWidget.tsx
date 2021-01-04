import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';
import { TSong } from '../types';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

const song = {
  id: '1',
  imageUri:
    'https://spotify-app-songs.s3.amazonaws.com/hao-wang-pVq6YhmDPtk-unsplash.jpg',
  uri:
    'https://spotify-app-songs.s3.amazonaws.com/Black_Ant_-_01_-_Fater_Lee.mp3',
  title: 'some title',
  artist: 'some artist',
};

export const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { id, imageUri, uri, title, artist } = song;
  const onPlaybackStatusUpdate = (status: any) => console.log(status);

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.stopAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <SContainer>
      <SImageContainer>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </SImageContainer>
      <STextContainer>
        <SText fontSize='18px'>{title}</SText>
        <SText fontColor='#dadada' fontSize='12px'>
          {artist}
        </SText>
      </STextContainer>
      <SIconContainer>
        <AntDesign name='hearto' size={30} color='white' />
        <STouchableOpacity onPress={onPlayPausePress}>
          {isPlaying ? (
            <AntDesign name='pause' size={30} color='white' />
          ) : (
            <Entypo name='controller-play' size={30} color='white' />
          )}
        </STouchableOpacity>
      </SIconContainer>
    </SContainer>
  );
};

// Styles

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    resizeMode: 'cover',
  },
});

const SContainer = styled.View`
  flex-direction: row;
  padding: 6px;
  position: absolute;
  bottom: 46px;
  background-color: #181818;
  width: 100%;
  border-bottom-width: 2px;
  border-color: black;
  align-items: center;
`;

const STouchableOpacity = styled.TouchableOpacity``;

const SIconContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: 10px;
  padding: 5px;
  justify-content: space-between;
  width: 86px;
`;

const SImageContainer = styled.View`
  margin: 8px;
`;
const STextContainer = styled.View`
  margin: 8px;
`;

type STextProps = {
  fontSize: string;
  fontColor: string;
};

const SText = styled.Text<Partial<STextProps>>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ fontColor }) => fontColor || 'white'};
  margin: 3px 0;
`;
