import React from 'react'
import {View, Text} from 'react-native'

// function Greeting() {
function Greeting(props) {
    return (
        <View>
            {/*<Text>Greeting</Text> */}
            <Text>안녕, {props.name}.</Text>
        </View>
    )
}

Greeting.defaultProps = {
    name: '한아름'
}

export default Greeting