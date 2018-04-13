import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput
                    placeholder="username"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ username: text })}
                />

                <TextInput
                    placeholder="password"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ password: text })}
                />

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() =>
                        this.props.login(this.state.username, this.state.password)}
                >
                    <Text
                    style={styles.buttonText}
                >
                    LOGIN
                    </Text>
                        </TouchableOpacity>
            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        textAlign: 'center',

    },
    buttonContainer: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',

    }

})