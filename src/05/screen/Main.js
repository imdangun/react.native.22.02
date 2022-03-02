import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text, View, Button} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

function Home({navigation}) {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Detal 1' onPress={() => navigation.push('Detail', {id: 1})}/>
        </View>
    )
}

function Search() {
    return (
        <View>
            <Text>Search</Text>
        </View>
    )
}

function Notification() {
    return (
        <View>
            <Text>Notification</Text>
        </View>
    )
}

function Message() {
    return (
        <View>
            <Text>Message</Text>
        </View>
    )
}

function Main() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
                tabBarActiveTintColor: '#fb8c00',
                tabBarShowLabel: false
            }}>
            <Tab.Screen name='Home' component={Home} options={{
                title: '홈',
                tabBarIcon: ({color, size}) => 
                    <Icon name='home' color={color} size={size}/>
            }}/>
            <Tab.Screen name='Search' component={Search} options={{
                title: '검색'
            }}
        </Tab.Navigator>
    )
}