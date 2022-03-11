import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Root from './screen/Root'
import {LogContextProvider} from './context/LogContext'
import {SearchContextProvider} from './context/SearchContext'

function App() {
    return (
        <NavigationContainer>
            <SearchContextProvider>
                <LogContextProvider>
                    <Root/>
                </LogContextProvider>
            </SearchContextProvider>
        </NavigationContainer>
    )
}

export default App