import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

function Counter({count, increase, decrease}) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>{count}</Text>
            </View>
            <Button title='+' onPress={increase}/>
            <Button title='-' onPress={decrease}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {flex: 1},
    numberArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 72,
        fontWeight: 'bold'
    }
})

export default Counter