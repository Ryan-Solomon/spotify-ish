export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  'Your Library': undefined;
  Spotify: undefined;
};

export type TabOneParamList = {
  Home: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  SearchScreen: undefined;
};
export type TabThreeParamList = {
  LibraryScreen: undefined;
};

export type TAlbum = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
};

export type TSong = {
  albumId: string;
  artist: string;
  createdAt: string;
  id: string;
  imageUri: string;
  title: string;
  uri: string;
};
