import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleTable from './PeopleTable';
import facade from '../auth/loginFacade';

export default class Home extends Component {
    logout = () => {
        facade.logout()
        console.log("WAAAAAAAAAAAAAAAAAAZZZZZZZZZZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        this.props.navigation.navigate('Splash');
    }
    render() {
        return (
            <View style={styles.container}>
                    <PeopleTable logout={this.logout} facade={facade} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    },
    title: {
        marginTop: 10,
        textAlign: 'center',

    },
})