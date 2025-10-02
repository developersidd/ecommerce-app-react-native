import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Heart, House, Search, ShoppingCart, User } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import CartScreen from '../screens/Cart/CartScreen';
import FavoriteScreen from '../screens/Favorite/FavoriteScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SearchScreen from '../screens/Search/SearchScreen';
type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Saved: undefined;
  Search: undefined;
};

const BottomTabScreen = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        //tabBarShowLabel: false,
        tabBarActiveTintColor: '#1A1A1A',
        tabBarStyle: {
          paddingTop: 10,
          height: 95,
        },
        tabBarLabelStyle: {
          fontSize: 13,
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ size, focused }) => {
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
            case 'Saved':
              IconComponent = Heart;
              break;
            case 'Search':
              IconComponent = Search;
              break;
            default:
              return null;
          }
          const iconColor = focused ? '#1A1A1A' : '#999999'; // Change color when focused
          return <IconComponent color={iconColor} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Saved" component={FavoriteScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
