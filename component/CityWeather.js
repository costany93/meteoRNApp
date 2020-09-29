import React,{useState} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import {Button,Title} from 'react-native-paper'
import { set } from 'react-native-reanimated';
import StatusBarCustom from '../nativeComponent/StatusBarCustom'

const CityWeather = ({route, navigation}) =>{
    const [country,setCountry] = useState('');
    const [town,setTown] = useState('');
    const [datetime,setDateTime] = useState('');
    const [temperature,setTemperature] = useState('');
    const [temps,setTemps] = useState('');
    const {nom} = route.params;
    let appears = 1;
    const API_KEY = '457c1d40852b629cbd288a9c89e14145';
    const getWeather = (text) => {
        return fetch('http://api.weatherstack.com/current?access_key='+API_KEY+'&query='+text)
          .then((response) => response.json())
          .then((json) => {
            if(typeof json.current === 'undefined'){
              alert("Désolé nous n'avons pas trouvé cette ville")
            }else{
              setCountry(json.location.country)
              setTown(json.location.name)
              setDateTime(json.location.localtime)
              setTemperature(json.current.temperature)
              setTemps(json.current.weather_descriptions)
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };

      
    return(
        <View>
            <StatusBarCustom title="Weather Town"/>
            <Button 
          mode="contained" 
          style={{marginTop: 10,backgroundColor: '#E06355'}}
          onPress={() => getWeather(JSON.stringify(nom))}
        >Méteo {JSON.stringify(nom)}</Button>
          <Title style={styles.nomVille}>{town}</Title>
          <Title style={styles.nomPays}>{country}</Title>
          <Text style={styles.heurePays}>{datetime}</Text>
          <Text style={styles.temperature}>{temperature} °</Text>
          <Text style={styles.temps}>{temps}</Text>
          </View>
        
    );
}
const styles = StyleSheet.create({
    nomPays: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30
      },
      nomVille: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 25
      },
      heurePays: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 25
      },
      temperature: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 35
      },
      temps: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 30
      }
})
export default CityWeather