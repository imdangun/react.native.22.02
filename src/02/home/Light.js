import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

export default function Light({color}) {
    return (
        <View style={[styles.light, colors[color]]}/>
    )
}

const styles = StyleSheet.create({
    light: {
        width: 50,
        height: 50,
        borderRadius: 25 
    },
    red: {
        backgroundColor: 'red'
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    green: {
        backgroundColor: 'green'
    }
})

const colors = {
    red: styles.red,
    yellow: styles.yellow,
    green: styles.green
}