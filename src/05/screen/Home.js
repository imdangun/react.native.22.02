import React from 'react'
import {View, Button} from 'react-native'

function Home({navigation}) {
    useEffect(() => {
        navigation.setOptions({title: '홈홈'})
    })
    
    return (
        <View>
            <Button title='상세1'
                onPress={() => navigation.push('Detail', {id: 1})}/>
            <Button title='상세2'
                onPress={() => navigation.push('Detail', {id: 2})}/>
            <Button title='상세3'
                onPress={() => navigation.push('Detail', {id: 3})}/>
        </View>
    )
}

export default Home