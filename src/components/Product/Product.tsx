import { Heart } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Product } from '../../lib/types/product';

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const {_id, name, image, price, discountedAmount,  } = product || {};
  const discountedPrice = discountedAmount && discountedAmount > 0 && price - discountedAmount;
  return (
    <View>
      <View>
        <Image source={require('../../assets/image/product/t-shirt-1.png')} />
        <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
          <Heart />
        </TouchableOpacity>
      </View>
      <View>
        <Text> Regular Fit Slogan</Text>
        <View>
          <Text>$20.00</Text>
          <Text>-52%</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
