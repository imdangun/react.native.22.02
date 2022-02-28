import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import DateHead from './component/DateHead'
import AddTodo from './component/AddTodo'
import Empty from './component/Empty'

function App() {
    const today = new Date()   

    return (
        <SafeAreaView style={styles.block}>           
            <DateHead date={today}/>
            <Empty/>
            <AddTodo/>                                           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    block: {       
        flex: 1
    }
})

export default App