import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';

const data = [
  { id: '1', title: 'All' },
  { id: '11', title: 'Men' },
  { id: '12', title: 'Women' },
  { id: '10', title: 'Kids' },
  { id: '2', title: 'T-Shirt' },
  { id: '3', title: 'Pants' },
  { id: '4', title: 'Shoes' },
  { id: '5', title: 'Shirt' },
  { id: '6', title: 'Dress' },
  { id: '7', title: 'Hoodie' },
  { id: '8', title: 'Jacket' },
  { id: '9', title: 'Top' },
];

type CategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <View style={tw`mt-3 px-5 pb-5`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(({ title, id }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(title)}
            key={id}
            style={tw.style(
              `px-5 py-2  mr-3 bg-["#181819"] rounded-lg  `,
              selectedCategory === title && 'bg-black',
              {
                borderColor: '#E6E6E6',
                borderWidth: 1,
              },
            )}
          >
            <Text
              style={tw.style(`text-sm font-semibold text-white`, {
                color: selectedCategory === title ? '#fff' : '#1A1A1A',
              })}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
