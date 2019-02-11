import React, { Component } from 'react';
import {
    Animated,
    Easing
} from 'react-native';

class ScaleInAndRotateInClockwise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: new Animated.Value(0),
            rerender: 0
        }
        this.rotate = this.state.initialValue.interpolate({
            inputRange: [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9, 1],
            outputRange: ["0deg","36deg","72deg","108deg","144deg","180deg","216deg","252deg","288deg","324deg","360deg"]
        });

        this.scale = this.state.initialValue.interpolate({
            inputRange: [0, 0.2, 0.5, 0.7, 0.9, 1],
            outputRange: [0.3, 0.5, 0.6, 0.8, 0.9, 1]
        });

        this.rotateAndScaleClockwise = Animated.timing(
            this.state.initialValue,
            {
                toValue: 1,
                duration: 1500,
                easing: Easing.ease
            }
        ).start();

    }

    render() {
        return (
            <Animated.View
                onLoad={() => this.rotateAndScaleClockwise}
                style={{transform: [{ rotate: this.rotate }, {scale: this.scale }]}}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default ScaleInAndRotateInClockwise;
