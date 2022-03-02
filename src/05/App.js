import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

function Home() {
    return <Text>Home</Text>
}

function Search() {
    return <Text>Search</Text>
}

function Notification() {
    return <Text>Notification</Text>
}

function Message() {
    return <Text>Message</Text>
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'
                tabBarOptions={{
                    activeTintColor: '#fb8c00',
                    showLabel: false
                }}>
                <Tab.Screen name='Home' component={Home} options={{                   
                    title: '홈',
                    tabBarIcon: ({color, size}) => 
                        <Icon name='home' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Search' component={Search} options={{
                    title: '검색',
                    tabBarIcon: ({color, size}) => 
                        <Icon name='search' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Notification' component={Notification} options={{
                    title: '알림',
                    tabBarIcon: ({color, size}) =>
                        <Icon name='notifications' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Message' component={Message} options={{
                    title: '메시지',
                    tabBarIcon: ({color, size}) => 
                        <Icon name='message' color={color} size={size}/>
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App