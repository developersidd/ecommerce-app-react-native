import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Heart, House, ShoppingCart, User } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import CartScreen from '../screens/Cart/CartScreen';
import FavoriteScreen from '../screens/Favorite/FavoriteScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Favorite: undefined;
};

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let IconComponent;
          switch (route.name) {
            case 'Home':
              IconComponent = House;
              break;
            case 'Profile':
              IconComponent = User;
              break;
            case 'Cart':
              IconComponent = ShoppingCart;
              break;
            case 'Favorite':
              IconComponent = Heart;
              break;
            default:
              return null;
          }
          const iconColor = focused ? '#FF6347' : color; // Change color when focused
          return <IconComponent color={iconColor} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
