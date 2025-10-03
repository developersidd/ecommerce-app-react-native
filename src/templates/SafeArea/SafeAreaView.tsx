import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import tailwind from 'twrnc';

type SafeViewProps = PropsWithChildren<
  {
    style?: string;
  } & Omit<SafeAreaViewProps, 'mode'>
>;

const SafeView = ({ children, style }: SafeViewProps) => {
  return (
    <SafeAreaView style={[style, tailwind`flex-1`]}>{children}</SafeAreaView>
  );
};

export default SafeView;

const styles = StyleSheet.create({});
