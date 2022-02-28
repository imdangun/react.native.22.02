import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, AsyncStorage} from 'react-native'
import DateHead from './component/DateHead'
import AddTodo from './component/AddTodo'
import Empty from './component/Empty'
import TodoList from './component/TodoList'

function App() {
    const today = new Date()

    const [todos, setTodos] = useState([
        {id: 1, text: '자바', done: true},
        {id: 2, text: '파이썬', done: false},
        {id: 3, text: '루비', done: false}
    ])

    const addTodo = text => {
        const todoId = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1
        const todo = {
            id: todoId,
            text,
            done: false
        }
        setTodos(todos.concat(todo))
    }
    
    const toggleDone = id => {
        const todosTmp = todos.map(todo => 
            todo.id === id ? {...todo, done: !todo.done} : todo)
        setTodos(todosTmp)
    }

    const delTodo = id => {
        const todosTmp = todos.filter(todo => todo.id != id)
        setTodos(todosTmp)
    }

    return (
        <SafeAreaView style={styles.block}>           
            <DateHead date={today}/>
            {todos.length ? 
                <TodoList 
                    todos={todos} 
                    toggleDone={toggleDone}
                    delTodo={delTodo}/> : 
                <Empty/>}
            <AddTodo addTodo={addTodo}/>                                           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    block: {       
        flex: 1
    }
})

export default App