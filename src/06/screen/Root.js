import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Main from './Main'
import Write from './Write'

const Stack = createNativeStackNavigator()

function Root() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='main' component={Main} options={{headerShown: false}}/>
            <Stack.Screen name='write' component={Write} />
        </Stack.Navigator>
    )
}

export default Root