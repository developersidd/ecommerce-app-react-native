import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Application from './navigation/Application';

const App = () => {
  return (
    <SafeAreaProvider>
      <Application />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
