import React, {useState} from 'react'
import {SafeAreaView, Button} from 'react-native'
import Box from './component/Box'

const App = () => {
    const [visible, setVisible] = useState(true)
    const toggleVisible = () => setVisible(!visible)

    return (
        <SafeAreaView>
            <Button title='toggle' onPress={toggleVisible}/>
            {visible && <Box/>}
        </SafeAreaView>
    )
}

export default App