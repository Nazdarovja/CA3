import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Hello test </Text>
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
        color: '#ecf0f1',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,

    },
})