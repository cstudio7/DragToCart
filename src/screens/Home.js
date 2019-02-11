import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native';
import CartBadge from '../components/CartBadge';
import ProductSlider from '../components/ProductSlider';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ backgroundColor: "#000", flex: 1}}>
                <StatusBar backgroundColor="#000" barStyle="dark-content" />
                <CartBadge />
                <ProductSlider />
            </View>
        );
    }
}

export default Home;
