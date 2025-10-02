import React from 'react';
import { StyleSheet } from 'react-native';
import Categories from '../../components/Category/Categories';
import Header from '../../components/Home/Header';
import SafeView from '../../templates/SafeArea/SafeAreaView';
const HomeScreen = () => {
  const [category, setCategory] = React.useState('All');
  return (
    <SafeView>
      <Header />
      {/*  categories */}
      <Categories selectedCategory={category} setSelectedCategory={setCategory} />
    </SafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
