import { Bell } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import SearchFiltering from './SearchFiltering';

const Header = () => {
  return (
    <View style={tw`px-5`}>
      <View style={tw`flex flex-row justify-between items-center mt-2`}>
        <Text style={tw`text-2xl font-extrabold`}>Discover</Text>
        <Bell />
      </View>
      {/* search filter */}
      <SearchFiltering />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
