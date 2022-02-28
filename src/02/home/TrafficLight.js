import React from 'react'
import {View, Button, StyleSheet} from 'react-native'
import Light from './Light'

export default function TrafficLight({color1, color2, color3}) {
    
    return (
        <View>
            <View style={styles.nav}>
                <Button title='빨강' />
                <Button title='노랑' />
                <Button title='녹색' />
            </View>
            <View style={{flex: 1}} />
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row', 
        justifyContent: 'space-around'       
    },
    red: {
        backgroundColor: 'red'
    }
})