import React, {useRef, useState, useEffect} from 'react'
import {Animated, Button, StyleSheet, View} from 'react-native'

function SlideLeftRight() {
    const animation = useRef(new Animated.Value(0)).current
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        Animated.timing(animation, {
            toValue: enabled ? 1 : 0,
            useNativeDriver: true
        }).start()
    })

    return (
        <View>
            <Animated.View style={[styles.rectangle, 
                {
                    transform: [{
                        translateX: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150]
                        })
                    }],
                    opacity: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0]
                    })
                }]}/>
            <Button title='Toggle' onPress={() => setEnabled(!enabled)}/>
        </View>
    )
}

function Calendar() {
    return (
        <View>
            <SlideLeftRight/>
            <View/>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }
})

export default Calendar