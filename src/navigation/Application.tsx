import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import CartScreen from '../screens/Cart/CartScreen';
import FavoriteScreen from '../screens/Favorite/FavoriteScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import BottomTabNavigator from './BottomTabScreen';
import { Paths } from './paths';
import { RootStackParamList } from './type';

const Application = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Paths.Home}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={Paths.Home}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={Paths.Profile} component={ProfileScreen} />
        <Stack.Screen name={Paths.Cart} component={CartScreen} />
        <Stack.Screen name={Paths.Favorite} component={FavoriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Application;

const styles = StyleSheet.create({});
