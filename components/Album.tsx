import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

type TProps = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
};

export const Album: FC<Partial<TProps>> = ({
  id,
  imageUri,
  artistsHeadline = 'Mumford & Sons, X Ambassadors, and more',
}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', { id });
  };

  return (
    <STouchableContainer onPress={onPress}>
      <SAlbumContainer>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: imageUri,
          }}
        />
        <SAlbumText numberOfLines={2}>{artistsHeadline}</SAlbumText>
      </SAlbumContainer>
    </STouchableContainer>
  );
};

// Styles

const SAlbumContainer = styled.View`
  width: 200px;
  height: 250px;
  padding: 10px;
  background-color: #222;
  margin: 10px;
`;

const SAlbumText = styled.Text`
  margin-top: 10px;
  color: grey;
`;

const STouchableContainer = styled.TouchableWithoutFeedback``;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 175,
    resizeMode: 'cover',
  },
});
