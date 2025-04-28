import { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
} from 'react-native-reanimated';

export function CoffeeAnimated() {
    const rotationAnimation = useSharedValue(0);

    useEffect(() => {
        rotationAnimation.value = withRepeat(
            withSequence(withTiming(5, { duration: 300 }), withTiming(0, { duration: 300 })),
            -1 // Run the animation 3 times
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: rotationAnimation.value }],
    }));

    return (
        <Animated.View style={animatedStyle}>
            <Text className='text-3xl'>☕</Text>
        </Animated.View>
    );
}