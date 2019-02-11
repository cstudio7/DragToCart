import React, { Component } from 'react';
import {
    Animated,
    Easing,
    PanResponder,
    StyleSheet
} from 'react-native';


export default class DraggableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            scale: new Animated.Value(1),
            opacity: new Animated.Value(1)
        };
        this.values = {x: 0, y: 0}

    }

    componentWillMount() {
        //add Listener
        this.state.pan.addListener((value) => this.values = value);
        //initialize with movement
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: this.state.pan.x,
                        dy: this.state.pan.y
                    }
                ]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isCartArea(gesture)) {
                    Animated.parallel([
                        Animated.timing(this.state.opacity, {
                            toValue: 0,
                            duration: 100
                        }).start(),
                        Animated.spring(this.state.pan, {
                          toValue: { x: 0, y: 0 },
                          //friction: 5
                      }).start()
                  ]);
                  this.props.onAddToCart();

                  setTimeout(() => {
                      this.setState({ opacity: new Animated.Value(1) });
                  }, 1000)

                  //this.setState({ opacity: new Animated.Value(1) });
                } else {
                    Animated.spring(this.state.pan, {
                      toValue: { x: 0, y: 0 },
                      friction: 5
                  }).start()

                }
            }
        });
        this.state.pan.setValue({x:0, y:0})
    }

    componentWillUnmount() {
        this.state.pan.removeAllListeners();
    }

    isCartArea(gesture) {
        return (gesture.moveY < 200 && gesture.moveX > 200);
    }

    render() {
        const dragStyle = {
            opacity: this.state.opacity,
            transform: this.state.pan.getTranslateTransform()
        };
        const scaleStyle = {
            transform: [{ scale: this.state.scale }]
        };
        return (
            <Animated.View
                style={[scaleStyle, dragStyle]}
                {...this.panResponder.panHandlers}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}
