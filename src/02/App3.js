import React, {useState} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Counter from './component/Counter'

const App = () => {
    const [count, setCount] = useState(0)
    const increaseCnt = () => setCount(count + 1)
    const decreaseCnt = () => setCount(count - 1)

    return (
        <SafeAreaView style={styles.full}>
            <Counter count={count} increase={increaseCnt} decrease={decreaseCnt} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    full: {
        flex: 1,
        backgroundColor: 'cyan'
    }
})

export default App