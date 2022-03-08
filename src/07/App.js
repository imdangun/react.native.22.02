import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Root from './screen/Root'
import {LogContextProvider}from './context/LogContext'

function App() {
    return (
        <NavigationContainer>
            <LogContextProvider>
                <Root/>
            </LogContextProvider>
        </NavigationContainer>
    )
}

export default App