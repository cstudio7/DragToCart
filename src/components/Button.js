import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    TouchableHighlight
} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => this.props.onPress()}
                underlayColor={this.props.underlayColor || '#000'}
            >
                <View style={styles.view}>
                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#4BF091",
        margin: 5,
        padding: 13,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: "#FAFAFA",
        textAlign: 'center',
        fontSize: 16,
    }
})
