import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SearchWeather from '../component/SearchWeather'
import CityList from '../component/CityList'
import CityWeatherWeek from '../component/CityWeatherWeek'

const Tab = createMaterialBottomTabNavigator();
function MainNavigation() {
    return(
            <Tab.Navigator
               barStyle={{backgroundColor: '#36B6F0'}} 
            >
                <Tab.Screen 
                    name="Research Town" 
                    component={SearchWeather}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Octicons name="search" color={color} size={25}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="List of Town" 
                    component={CityList}
                    options={{
                        tabBarColor: 'green',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                          ),
                    }}
                />
                <Tab.Screen
                    name="Week weather" 
                    component={CityWeatherWeek}
                    options={{
                        tabBarColor: 'green',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="weather-cloudy" color={color} size={26} />
                          ),
                    }}
                />
            </Tab.Navigator>
    );

}
export default MainNavigation;