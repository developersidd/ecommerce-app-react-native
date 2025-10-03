import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import tw from 'twrnc';
import type { ProductType } from '../../lib/types/product';
import Product from './Product';
type ProductListProps = {
  products: ProductType[];
};

const ProductList = ({ products }: ProductListProps) => {
  console.log('🚀 ~ products:', products);
  return (
    <View style={tw`px-5 pt- flex-1`}>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        numColumns={2}
        columnWrapperStyle={tw`justify-between mb-6`}
        renderItem={({ item }) => <Product product={item} />}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
