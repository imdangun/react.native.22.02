import React, {useState, useContext} from 'react'
import {StyleSheet, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import WriteHeader from '../component/WriteHeader'
import WriteEditor from '../component/WriteEditor'
import LogContext from '../context/LogContext'
import {useNavigation} from '@react-navigation/native'

function Write() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigation = useNavigation()
    const {onCreate} = useContext(LogContext)
    const onSave = () => {
        onCreate({
            title,
            body,
            date: new Date().toISOString()
        })
        navigation.pop()
    }

    return (
        <SafeAreaView style={styles.block}>
            <WriteHeader onSave={onSave}/>
            <WriteEditor
                title={title}
                body={body}
                onChangeTitle={setTitle}
                onChangeBody={setBody}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default Write