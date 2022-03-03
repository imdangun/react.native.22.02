import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {useRoute} from '@react-navigation/native'

function IDText() {
    const route = useRoute()
    return <Text style={styles.text}>id: {route.params.id}</Text>
}

function Detail({route, navigation}) {
    useEffect(() => {
        navigation.setOptions({
            title: `상세${route.params.id}`
        })
    })
    
    return (
        <View style={styles.block}>
            <Text style={styles.text}>id: {route.params.id}</Text>
            <View style={styles.buttons}>
                <Button title='다음' 
                    onPress={() => navigation.push('Detail', {id: route.params.id + 1})}/>
                <Button title='뒤로' onPress={() => navigation.pop()}/>
                <Button title='Home' onPress={() => navigation.popToTop()}/>
            </View>
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
    },
    buttons: {
        flexDirection: 'row'
    }
})

export default Detail