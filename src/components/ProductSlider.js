import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    ImageBackground,
    Image,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import Ball from './Ball';
import ScaleInAndRotateInClockwise from './ScaleInAndRotateInClockwise';
import DraggableView from './DraggableView';
import Button from './Button';
import { addItemToCart } from '../actions/CartActions';

class ProductSlider extends Component {
    state = {
        products: [
            {
                brand: "UA HOVR",
                logo: require("../assets/images/underamourlogo.png"),
                picture: require("../assets/images/sneaker1.png")
            },
            {
                brand: "ADI RUNNER",
                logo: require("../assets/images/adidaslogo.png"),
                picture: require("../assets/images/sneaker2.png")
            },
            {
                brand: "UA HOVR B",
                logo: require("../assets/images/underamourlogo.png"),
                picture: require("../assets/images/sneaker3.png")
            },
            {
                brand: "UA HOVR GOLD",
                logo: require("../assets/images/underamourlogo.png"),
                picture: require("../assets/images/sneaker6.png")
            },
            {
                brand: "UA HOVR GREEN",
                logo: require("../assets/images/underamourlogo.png"),
                picture: require("../assets/images/sneaker7.png")
            }
        ],

        current: 0,
        previous: null,
        next: 1
    }

    componentDidUpdate(prevState) {
        console.log('prevProps', prevState);
    }

    onRightTap() {
        if (this.state.current === 0) {
            this.setState({
                next: this.state.next + 1,
                current: this.state.current + 1,
                previous: 0
            });
        } else {
            this.setState({
                next: this.state.next + 1,
                current: this.state.current + 1,
                previous: this.state.previous + 1
            });
        }
    }

    onLeftTap() {
        if (this.state.current === 0) {
            this.setState({
                next: this.state.next - 1,
                current: this.state.current - 1,
                previous: null
            });
        } else {
            this.setState({
                next: this.state.next - 1,
                current: this.state.current - 1,
                previous: this.state.previous - 1
            });
        }
    }

    render() {
        const { products, next, previous, current } = this.state;
        return (
            <View>
                <View style={{flexDirection: "row"}}>
                    <View style={{width: deviceWidth/2.5, opacity: 0.9}}>
                        <Ball
                            colors={['#4BF091', '#C1FD49']}
                            locations={[0.26, 0.6]}
                            style={styles.ballOne}
                        />
                    </View>
                    <View style={{width: deviceWidth/6, justifyContent: 'center', alignItems: 'center', opacity: 0.4 }}>
                        <Ball
                            colors={['#4BF091', '#C1FD49']}
                            locations={[0.26, 0.6]}
                            style={styles.ballTwo}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: deviceWidth}}>
                    {
                        products[previous] ?
                            <View style={styles.previous}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.onLeftTap()}
                                >
                                    <Image
                                        source={products[previous].picture}
                                        style={styles.previousImage}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        :
                        <View style={styles.noProduct} />

                    }

                    <DraggableView
                        onAddToCart={() => {
                            this.props.addItemToCart();
                            Alert.alert('Added!', 'Item has been added to the cart')
                        }}
                    >
                        <View style={styles.current}>
                            <ScaleInAndRotateInClockwise
                                changed={true}
                            >
                                <Image
                                    source={products[current].picture}
                                    style={styles.currentImage}
                                />
                            </ScaleInAndRotateInClockwise>
                        </View>
                    </DraggableView>

                    {
                        products[next] ?
                            <View style={styles.next}>
                                <TouchableWithoutFeedback
                                    onPress={() => this.onRightTap()}
                                >
                                    <Image
                                        source={products[next].picture}
                                        style={styles.nextImage}
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        :
                        <View style={styles.noProduct} />
                    }

                </View>

                <View style={styles.brandView}>
                    <Text style={styles.brandText}>
                        {products[current].brand}
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={products[current].logo}
                        style={{ height: 40, width: 40 }}
                    />
                </View>
                <Button
                    text="Add To Cart"
                    onPress={() => {
                        console.log(addItemToCart)
                        this.props.addItemToCart(products[current])
                    }}
                />
            </View>
        )
    }
}


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    ballOne: {
        borderRadius: 100,
        padding: 100,
        margin: 2,
        marginLeft: -48
    },
    ballTwo: {
        borderRadius: 100,
        padding: 30,
        margin: 2,
    },
    previous: {
        width: deviceWidth/3,
        height: deviceWidth/3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFF',
        borderRadius: (deviceWidth/3)/2,
        marginRight: -30,
        opacity: 0.4
    },
    current: {
        backgroundColor: "#fff",
        width: deviceWidth/1.9,
        height: deviceWidth/1.9,
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFF',
        borderRadius: (deviceWidth/1.9)/2,
        marginTop: -25
    },
    next: {
        width: deviceWidth/3,
        height: deviceWidth/3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFF',
        borderRadius: (deviceWidth/3)/2,
        marginLeft: -30,
        opacity: 0.4
    },

    noProduct: {
        width: deviceWidth/3,
        height: deviceWidth/3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'transparent',
        borderRadius: (deviceWidth/3)/2,
        marginLeft: -30,
        opacity: 0.4
    },

    previousImage: {
        width: deviceWidth/3,
        height: deviceWidth/3,
        resizeMode: 'cover'
    },

    nextImage: {
        width: deviceWidth/3,
        height: deviceWidth/3,
        resizeMode: 'cover'
    },
    currentImage: {
        width: deviceWidth/1.5,
        height: deviceWidth/1.5,
        resizeMode: 'cover'
    },

    brandText: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    brandView: {
        paddingTop: 7,
        paddingBottom: 1
    }
})

export default connect(null, {addItemToCart})(ProductSlider);
