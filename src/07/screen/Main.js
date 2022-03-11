import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feed from './Feed'
import Calendar from './Calendar'
import Search from './Search'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchHeader from '../component/SearchHeader'

const Tab = createBottomTabNavigator()

function Main() {
    return (
        <Tab.Navigator screenOptions={{
            showLabel: false,
            activeTintColor: '#009688'}}>
            <Tab.Screen name='feed' component={Feed} options={{
                tabBarIcon: ({color, size}) => 
                    <Icon name='view-stream' size={size} color={color}/>}}/>
            <Tab.Screen name='calendar' component={Calendar} options={{
                tabBarIcon: ({color, size}) =>
                    <Icon name='event' size={size} color={color}/>}}/>
            <Tab.Screen name='search' component={Search} options={{
                tabBarIcon: ({color, size}) => 
                    <Icon name='search' size={size} color={color}/>,
                headerTitle: () => <SearchHeader/>}}/>       
        </Tab.Navigator>
    )
}

export default Main