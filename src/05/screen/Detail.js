import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Detail({route}) {
    return (
        <View style=[styles.block]>
            <Text>상세입니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 48
    }
})

export default Detail