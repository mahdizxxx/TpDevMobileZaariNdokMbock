import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import FavoritesScreen from '../screens/FavoritesScreen';
import { createStackNavigator } from 'react-navigation-stack';
import AddFavoriteScreen from '../screens/AddFavoriteScreen';

const favoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: FavoritesScreen },
        AddFavorite: { screen: AddFavoriteScreen }
    },
    {
        initialRouteName: 'Favorites',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    });

const tabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-home'} />
            )
        }
    },
    Favorites: {
        screen: favoritesNavigator,
        navigationOptions: {
            tabBarLabel: 'Favoris',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-star'} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Paramètres',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-settings'} />
            ),
            barStyle: { backgroundColor: 'red' }
        }
    }
},
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(tabNavigator);