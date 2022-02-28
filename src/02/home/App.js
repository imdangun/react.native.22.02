import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import TrafficLight from './TrafficLight'

const App = () => 
    <SafeAreaView>
        <TrafficLight colors={{
            color1: 'red',
            color2: 'yellow',
            color3: 'green'}}/>      
    </SafeAreaView>

export default App