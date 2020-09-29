
import React,{useState} from 'react';
import { StyleSheet,View, ScrollView,Text,FlatList} from 'react-native';
import StatusBarCustom from '../nativeComponent/StatusBarCustom'
import City from './City'
import Ville from '../Data/Ville'

const CityWeatherWeek = ({navigation}) =>{
   const ville = Ville
    const backColor = "#E0827C"
    return(
        <View>
            <StatusBarCustom title="Weather Week"/>
            <FlatList
                data={ville}
                keyExtractor={vill => vill.id.toString()}
                renderItem={({item}) => <City name={item.nomVille} background={backColor} onPress={() => navigation.push("CityWeek", {nom: item.nomVille, mini: item.mini, maxi: item.maxi})}/>
                }
            />
            
        </View>
    );
}

export default CityWeatherWeek


