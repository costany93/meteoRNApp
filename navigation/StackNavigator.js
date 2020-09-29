import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchWeather from '../component/SearchWeather'
import {NavigationContainer} from '@react-navigation/native'
import CityList from '../component/CityList'
import MainNavigation from '../navigation/MainNavigation'
import CityWeather from '../component/CityWeather'
import CityWeatherWeek from '../component/CityWeatherWeek'
import CityWeek from '../component/CityWeek'

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        nav
      >
      <Stack.Screen name="Home" component={MainNavigation}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen name="Search" component={SearchWeather} />
      <Stack.Screen name="CityList" component={CityList} />
      <Stack.Screen name="CityWeatherWeek" component={CityWeatherWeek} />
      <Stack.Screen name="CityWeather" component={CityWeather} 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="CityWeek" component={CityWeek} 
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator