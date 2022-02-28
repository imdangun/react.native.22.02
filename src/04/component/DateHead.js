import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

function DateHead({date}) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const dateStr = `${year}/${month}/${day}`

    return (
        <>
            <StatusBar backgroundColor='#26a69a' barStyle='dark-content'/>
            <View style={styles.block}>
                <Text style={styles.dateText}>{dateStr}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    block: {
        padding: 16,
        backgroundColor: '#26a69a'
    },
    dateText: {
        fontSize: 24,
        color: 'white'
    }
})

export default DateHead