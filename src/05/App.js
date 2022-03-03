import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Main from './screen/Main'
import Detail from './screen/Detail'

const Stack = createNativeStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main} options={{headerShown: false}}/>
                <Stack.Screen name='Detail' component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App