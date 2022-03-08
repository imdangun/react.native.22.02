import React, {useState, useContext} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import WriteHeader from '../component/WriteHeader'
import WriteEditor from '../component/WriteEditor'
import LogContext from '../context/LogContext'
import {useNavigation} from '@react-navigation/native'

function Write({route}) {
    const log = route.params?.log  

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigation = useNavigation()

    const {onCreate, onModify, onRemove} = useContext(LogContext)

    const onSave = () => {
        if(log) {
            onModify({
                id: log.id,
                date: log.date,
                title,
                body
            })
        } else {
            onCreate({
                title,
                body,
                date: new Date().toISOString()
            })
        }
        navigation.pop()
    }

    const onAskRemove = () => {
        Alert.alert('삭제', '삭제하시겠습니까?', [
            {text: '취소', style: 'cancel'},
            {
                text: '삭제',
                onPress: () => {
                    onRemove(log?.id)
                    navigation.pop()
                },
                style: 'destructive'
            }             
        ],{cancelable: true})
    }

    return (
        <SafeAreaView style={styles.block}>
            <WriteHeader 
                onSave={onSave}
                onAskRemove={onAskRemove}
                isEditing={!!log}/>
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