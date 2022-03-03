import React, {useContext} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import LogContext from '../context/LogContext'

function Feed() {
    const value = useContext(LogContext)

    return (
        <View>
            <Text>{value}</Text>        
        </View>
    )
}

export default Feed