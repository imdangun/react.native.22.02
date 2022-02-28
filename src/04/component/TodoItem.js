import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function TodoItem({id, text, done, toggleDone, delTodo}) {
    const alert = () => {
        Alert.alert(
            '삭제',
            '할일을 삭제하시겠습니까?',
            [
                {text: '아니오', onPress: () => {}},
                {text: '예', onPress: () => delTodo(id)}
            ],
            {cancelable: true, onDismiss: () => {}}
        )
    }

    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => toggleDone(id)}>
                <View style={[styles.circle, done && styles.filled]}>
                    {done && <Image srouce={require('../asset/icon/check.png')}/>}
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
            {done ? 
                <TouchableOpacity onPress={alert}>
                    <Icon name='delete' size={32} color='red'/> 
                </TouchableOpacity>
                :
                <View style={styles.removePlaceholder}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItem: 'center'
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121'
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a'
    },
    lineThrough: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through'
    },
    removePlaceholder: {
        width: 32,
        height: 32
    }
})

export default TodoItem