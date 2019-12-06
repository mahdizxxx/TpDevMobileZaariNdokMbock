import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Icon, ScrollView } from 'react-native';
import NewsService from '../services/NewsService';
import Loading from '../components/Loading';

export default class componentName extends Component {

    static navigationOptions() {
        return {
            title: 'HomePage',
            headerRight: (
                <Icon size={25} name={'ios-add'}
                    onPress={() => {
                        navigation.push('Details');
                    }} />

            )
        }
    }

    state = { data: null };

    serv = new NewsService();

    componentDidMount() {
        const n = this.serv.getNews().then(
            resp => {
                this.setState({ data: resp.data });
            }
        );
    }




    render() {
        return (

            <View style={{ flex: 1 }}>
                {this.state.data ? (

                    <ScrollView>
                        {
                            ListArr = this.state.data.articles.map((Info) => (
                                <View key={Info}>
                                    <Text style={styles.titleText}>{Info.title}</Text>
                                    <Text>Source : {Info.source.name}</Text>

                                    <Button title="Lire ..." onPress={() => { this.navigationOptions() }} />

                                    <Image style={{ width: 100, height: 100 }} source={{ uri: `${Info.urlToImage}` }} />

                                    <Text>Publié le : {Info.publishedAt}</Text>
                                    <Text></Text>
                                    <Text>Ecrit par : {Info.author}</Text>
                                    <Text></Text>
                                    <Text>Contenu : {Info.content}</Text>

                                    <Text>-----------------------------------------------------------------------------------------</Text>

                                    <Text></Text>
                                </View>
                            ))

                        }

                    </ScrollView>

                ) : (<Loading displayColor="teal">
                    <Text>Rafraîchissement de l'actus ...</Text>
                </Loading>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 15,
        fontWeight: 'bold',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#EBEDEF',
        borderWidth: 1,
        backgroundColor: '#EBEDEF'
    },
});