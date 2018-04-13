import React, { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}> Welcome to the Seed App </Text>
                </View>
                <View>
                    <View style={styles.button} >
                    <Button 
                    onPress={()=> this.props.navigation.navigate('Login')} 
                    title="Press here to Login" 
                    />
                    </View>
                    <Text style={styles.subtitle}>Powered by React Native</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f3542',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20,
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',

    },
    button : {
        paddingBottom: 40,
    }

})