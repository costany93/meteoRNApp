
import React,{useState} from 'react';
import { StyleSheet,View, ScrollView,Text,FlatList} from 'react-native';
import StatusBarCustom from '../nativeComponent/StatusBarCustom'
import City from '../component/City'
import Ville from '../Data/Ville'

const CityList = ({navigation}) =>{
    const ville = Ville
    const backColor = "#E0827C"
    return(
        <View>
            <StatusBarCustom title="List of town"/>
            <FlatList
                data={ville}
                keyExtractor={vill => vill.id.toString()}
                renderItem={({item}) => <City name={item.nomVille} background={backColor} onPress={() => navigation.push("CityWeather", {nom: item.nomVille})}/>
                }
            />
            
        </View>
    );
}

export default CityList


