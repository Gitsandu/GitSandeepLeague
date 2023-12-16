import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, PanResponder, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

function CardDeck(props) {
    const rotateDeg = 15;
    const swipeThreshold = 120;

    const translateX = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                // Move the card horizontally based on the gesture
                translateX.setValue(gestureState.dx);
            },
            onPanResponderRelease: (_, gestureState) => {
                // Check if the card has been swiped enough to consider it as a valid swipe
                if (gestureState.dx > swipeThreshold) {
                    // Right swipe, animate the card to the right
                    Animated.timing(translateX, {
                        toValue: width,
                        duration: 300,
                        useNativeDriver: false,
                    }).start(() => {
                        // Reset card position for the next card
                        translateX.setValue(0);
                    });
                } else if (gestureState.dx < -swipeThreshold) {
                    // Left swipe, animate the card to the left
                    Animated.timing(translateX, {
                        toValue: -width,
                        duration: 300,
                        useNativeDriver: false,
                    }).start(() => {
                        // Reset card position for the next card
                        translateX.setValue(0);
                    });
                } else {
                    // If not swiped enough, reset the card position
                    Animated.spring(translateX, {
                        toValue: 0,
                        friction: 4,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const cardStyle = {
        transform: [
            { translateX: translateX },
            { rotate: translateX.interpolate({
                inputRange: [-width, 0, width],
                outputRange: [`-${rotateDeg}deg`, '0deg', `${rotateDeg}deg`],
            }) },
        ],
    };

    return (
        <View
            {...panResponder.panHandlers}
            style={[styles.container, { width, height }]}
        >
            <Animated.View style={[styles.card, styles.card1, cardStyle]}></Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: 300,
        height: 300,
        position: 'absolute',
    },
    card1: { backgroundColor: 'red', zIndex: 6 },
});

export default CardDeck;
