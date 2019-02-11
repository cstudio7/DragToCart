import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Ball from './Ball';


class CartBadge extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.cartLeft}
                />
                <View style={styles.cartRight}>
                    <Ball
                        colors={['#4BF091', '#C1FD49']}
                        locations={[0.26, 0.6]}
                        style={styles.ball}
                    />
                    <ImageBackground
                        source={require('../assets/images/paper-bag.png')}
                        style={styles.cartImage}
                    >
                        <View style={styles.number}>
                            <Text style={{ textAlign: 'center', color: "#fff"}}>
                                {this.props.cartTotal}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },

    cartImage: {
        height: 100,
        width: 100,
        marginTop: -100,
        resizeMode: 'cover'
    },

    cartRight: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
    },

    cartLeft: {
        width: deviceWidth * (2/3),
    },

    ball: {
        borderRadius: 120,
        padding: 100,
        marginTop: -80,
        marginRight: -60,
        opacity: 0.6
    },
    number: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4949',
        height: 40,
        width: 40,
        borderRadius: 20,
        marginTop: 40,
        marginLeft: 30,
    }

});

const mapStateToProps = (state) => {
    return {
        cartTotal: state.cart.total
    }
}

export default connect(mapStateToProps)(CartBadge);
