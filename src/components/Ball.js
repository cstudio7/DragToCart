import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Ball = ({...props}) => {
    return (
        <LinearGradient
            start={{x: 0.0, y: 0.1}} end={{x: 1.0, y: 0.0}}
            colors={props.colors}
            locations={props.locations}
            style={props.style}
        />
    )
}

export default Ball;
