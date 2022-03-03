import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Root from './screen/Root'
import LogContext from './context/LogContext'

function App() {
    return (
        <NavigationContainer>
            <LogContext.Provider value='안녕'>
                <Root/>
            </LogContext.Provider>
        </NavigationContainer>
    )
}

export default App