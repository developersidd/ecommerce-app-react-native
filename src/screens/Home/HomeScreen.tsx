import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { mockProducts } from '../../api/mockData';
import Categories from '../../components/Category/Categories';
import Header from '../../components/Home/Header';
import ProductList from '../../components/Product/ProductList';
import { ProductType } from '../../lib/types/product';
import SafeView from '../../templates/SafeArea/SafeAreaView';
const HomeScreen = () => {
  const [category, setCategory] = React.useState('All');
  const [productsByCategory, setProductsByCategory] =
    useState<ProductType[]>(mockProducts);
  useEffect(() => {
    if (category === 'All') {
      setProductsByCategory(mockProducts);
    } else {
      console.log(
        '🚀 ~ category:',
        category,
        mockProducts.filter(product =>
          product.category.includes(category.toUpperCase()),
        ),
      );
      const filteredProducts = mockProducts
        .filter(product => {
          if (
            product.category.some(
              cat => cat.toUpperCase() === category.toUpperCase(),
            )
          ) {
            return true;
          }
        })
        //.filter(Boolean) as ProductType[];
      setProductsByCategory(filteredProducts);
    }
  }, [category]);

  return (
    <SafeView>
      <Header />
      {/*  categories */}
      <Categories
        selectedCategory={category}
        setSelectedCategory={setCategory}
      />
      {/*  products list */}
      <ProductList products={productsByCategory} />
    </SafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
