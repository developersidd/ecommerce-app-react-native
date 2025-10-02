import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type SafeAreaViewProps = {
  children: React.ReactNode;
};

const SafeView = ({ children }: SafeAreaViewProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeView;

const styles = StyleSheet.create({});
