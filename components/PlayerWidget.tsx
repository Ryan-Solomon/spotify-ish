import React, { useEffect, useState } from 'react';

import styled from 'styled-components/native';
import { TSong } from '../types';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import { useAppContext } from '../context/appContext';

export const PlayerWidget = () => {
  const { setCurrentSong, currentSong } = useAppContext();
  const [isLiked, setIsLiked] = React.useState(false);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status: any) => {
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

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
  }, [currentSong]);

  if (!currentSong) return null;

  const { id, imageUri, uri, title, artist } = currentSong;

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

  const getProgress = () => {
    if (sound === null || duration === null || position === null) return 0;
    return (position / duration) * 100;
  };

  return (
    <SContainer>
      <SProgressBar width={`${getProgress()}`} />
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
        <SIconWrapper onPress={() => setIsLiked(!isLiked)}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={30}
            color='white'
          />
        </SIconWrapper>
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

const SIconWrapper = styled.TouchableOpacity`
  margin-right: 10px;
`;

const SIconContainer = styled.View`
  flex-direction: row;
  margin-left: auto;
  margin-right: 10px;
  padding: 5px;
  justify-content: space-between;
  width: 90px;
  align-items: center;
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

type TProgressBarProps = {
  width: string;
};

const SProgressBar = styled.View<TProgressBarProps>`
  width: ${({ width }) => `${width}%`};
  height: 3px;
  background-color: white;
  position: absolute;
  top: 0;
`;
