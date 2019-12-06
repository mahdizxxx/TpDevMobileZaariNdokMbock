import React, { Component } from 'react';
import { AsyncStorage, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WeatherService from '../services/NewsService';
import ItemWeather from '../components/ItemWeather';
import { ActivityIndicator } from 'react-native-paper';

class FavoritesScreen extends Component {

    static navigationOptions = (e) => {
        return {
            title: 'Favoris',
            headerRight: (
                <Icon size={25} name={'ios-add'}
                    onPress={() => {
                        e.navigation.push('AddFavorite');
                    }} />
            )
        }
    }

    serviceWeather = new WeatherService();

    state = { cities: null }

    async update() {
        const cities = JSON.parse(await AsyncStorage.getItem('CITIES'));
        const tab = [];
        for (const c of cities) {
            weather = await this.serviceWeather.getWeatherByCity(c);
            tab.push(weather.data);
        }
        this.setState({ cities: tab });
    }

    componentDidMount() {
        this.update();
    }

    componentDidUpdate() {
        this.update();
    }

    delete = async (cityName) => {
        const tab = this.state.cities.map(e => e.name);
        tab.splice(tab.findIndex(e => e === cityName), 1);
        await AsyncStorage.setItem('CITIES', JSON.stringify(tab));
        this.update();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.cities ? (
                    <FlatList data={this.state.cities}
                        renderItem={(e) => (
                            <ItemWeather key={e.item.name} city={e.item} onDelete={this.delete} />
                        )} />
                ) : (<ActivityIndicator />)}
            </View>
        );
    }
}

export default FavoritesScreen;