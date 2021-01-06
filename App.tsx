import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PlayerWidget } from './components/PlayerWidget';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from 'aws-amplify';
// @ts-ignore
import config from './aws-exports';
import { AppProvider } from './context/appContext';
Amplify.configure(config);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </AppProvider>
      </SafeAreaProvider>
    );
  }
}

// Fix the way a searched song looks with player widget showing
// Add gesture thing with "can it be done in react native"
// Publish to explo and record a demo
