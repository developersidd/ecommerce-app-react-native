import { Heart } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import type { ProductType } from '../../lib/types/product';

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  const { _id, name, image, price, discountedAmount } = product || {};
  const [isFavorite, setIsFavorite] = React.useState(false);
  const discountedPrice =
    discountedAmount && discountedAmount > 0 ? price - discountedAmount : price;
  const discountPercent =
    discountedAmount && discountedAmount > 0
      ? ((price - discountedAmount) / price) * 100
      : 0;
  const toggleFavorite = (_id: string) => {
    // Implement favorite toggle functionality here
    console.log(`Toggled favorite for product ID: ${_id}`);
    setIsFavorite(!isFavorite);
  };
  return (
    <View style={tw``}>
      <View
        style={tw`w-[161px] h-[174px] bg-gray-200 rounded-xl justify-center items-center bg-gray-200 p-2`}
      >
        <Image
          source={require('../../assets/image/product/t-shirt-4.png')}
          resizeMode="cover"
          resizeMethod="resize"
          style={tw`w-full h-full rounded-xl`}
        />
        <TouchableOpacity
          onPress={() => toggleFavorite(_id)}
          style={tw`absolute top-2 right-2 p-2 shadow-sm bg-white rounded-lg`}
        >
          <Heart
            size={20}
            color={isFavorite ? 'red' : 'black'}
            fill={isFavorite ? 'red' : 'none'}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`p-1 mt-1`}>
        <Text style={tw`font-bold text-base mb-1`}> {name} </Text>
        <View style={tw`flex-row items-center gap-1 ml-1`}>
          <Text style={tw`text-gray-600`}>$ {discountedPrice.toFixed(2)}</Text>
          {discountPercent > 0 && (
            <Text style={tw`text-[#ED1010]`}>-{discountPercent.toFixed(0)}%</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
