import React, { Component } from 'react';
import { TextInput, Button, View, AsyncStorage } from 'react-native';
import WeatherService from '../services/NewsService';

class AddFavoriteScreen extends Component {
    static navigationOptions = (e) => {
        return {
            title: 'Ajouter une ville'
        }
    }

    serviceWeather = new WeatherService();

    state = { cityName: '' }

    onChange = (value) => {
        this.setState({ cityName: value });
    }

    save2 = async () => {
        let weather = await this.serviceWeather.getWeatherByCity(this.state.cityName);
        if (weather != null) {
            let data = await AsyncStorage.getItem('CITIES');
            let tab = [];
            if (data != null) {
                tab = JSON.parse(data);
            }
            tab.push(this.state.cityName);
            await AsyncStorage.setItem('CITIES', JSON.stringify(tab));
            this.props.navigation.goBack();
        } else {
            alert(`La ville n'existe pas`);
        }
    }

    save = () => {
        //console.log(this.state.cityName);
        AsyncStorage.getItem('CITIES').then(data => {
            let tab = [];
            if (data != null) {
                tab = JSON.parse(data);
            }
            tab.push(this.state.cityName);
            AsyncStorage.setItem('CITIES', JSON.stringify(tab)).then(() => {
                this.props.navigation.goBack();
            });
        });

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput onChangeText={this.onChange} />
                <Button title="Ajouter" onPress={this.save2} />
            </View>
        );
    }
}

export default AddFavoriteScreen;