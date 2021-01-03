import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';
import { TSong } from '../types';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

const DefaultImage = require('../assets/images/album-cover-1.jpg');
const music = require('../assets/music/Fog_Lake_-_04_-_kerosene.mp3');

const song: TSong = {
  id: '1',
  uri: music,
  imageUri: DefaultImage,
  artist: 'Taylor Swift',
  title: 'Willow',
};

export const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);
  const { imageUri, artist, title, uri } = song;
  const onPlayBackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);

    console.log(status);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri },

      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    [];
  });

  const onPlayPausePress = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) return 0;
    return (position / duration) * 100;
  };

  return (
    <SContainer>
      <SImageContainer>
        <Image style={styles.image} source={imageUri as ImageSourcePropType} />
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
