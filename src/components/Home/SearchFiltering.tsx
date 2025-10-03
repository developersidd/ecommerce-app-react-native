import { Search, SlidersVertical, X } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import useDebounce from '../../hooks/useDebounce';
import ProductsFilteringModal from './ProductsFilteringModal';
const SearchFiltering = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  // Perform search operation here
  const handleSearchChange = (text: string) => {
    console.log('Searching for:', text);
  };
  const clearSearch = () => {
    setSearchQuery('');
  };
  // handle debounce search
  const handleDebounceSearch = useDebounce(handleSearchChange, 5000);
  return (
    <View style={tw`flex flex-row justify-between items-center mt-4 mb-2`}>
      <View
        style={tw`flex-1 flex-row items-center bg-gray-200 px-3 mr-2 rounded-lg border border-[#E6E6E6] `}
      >
        <Text style={tw`mr-1.5`}>
          <Search color={'#B3B3B3'} size={20} />
        </Text>
        <TextInput
          style={tw`flex-1 py-3 text-base`}
          placeholder="Search for clothes..."
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            handleDebounceSearch(text);
          }}
          //  autoFocus
          returnKeyType="search"
          placeholderTextColor="#999999"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={clearSearch} style={tw`ml-2`}>
            <X />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={tw`p-3 bg-gray-200 rounded-lg  bg-[#181819] border-0`}
      >
        {/* Filter options */}
        <SlidersVertical color={'#fff'} />
      </TouchableOpacity>
      <ProductsFilteringModal
        visible={openModal}
        onClose={() => setOpenModal(false)}
      />
    </View>
  );
};

export default SearchFiltering;

const styles = StyleSheet.create({});
