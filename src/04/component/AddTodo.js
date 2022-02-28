import React, {useState} from 'react'
import {
    View, 
    StyleSheet, 
    TextInput, 
    Image, 
    TouchableNativeFeedback,
    Keyboard
} from 'react-native'

function AddTodo({addTodo}) {
    const [text, setText] = useState('')

    const onPress = () => {
        addTodo(text)
        setText('')
        Keyboard.dismiss()
    } 

    return (
        <View style={styles.block}>
            <TextInput 
                placeholder='할일을 입력하세요.' 
                style={styles.input}
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress}/>
            <View style={styles.circleWrapper}>
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.buttonStyle}>
                        <Image source={require('../asset/icon/add.png')}/>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        fontSize: 16,
        paddingVertical: 8,
        flex: 1
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#26a69a',
        borderRadius: 24
    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24
    }
})

export default AddTodo