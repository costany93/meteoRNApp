
import React,{useState} from 'react';
import { StyleSheet,View } from 'react-native';
import {Searchbar,Button,Text,Title} from 'react-native-paper'
import StatusBarCustom from '../nativeComponent/StatusBarCustom'


const API_KEY = '457c1d40852b629cbd288a9c89e14145';



export default class SearchWeather extends React.Component {
  constructor(props){
    super(props);
    this.villeEntrer = ""
    this.state = {
      weather: [],
      country: "Congo",
      town: "Brazzaville",
      datetime: "2020-10-10 11:50",
      temperature: "23",
      temps: "clear"
      
    }
  }
  
  _changeText(text){
    this.villeEntrer = text
  }
  getWeather(text) {
    return fetch('http://api.weatherstack.com/current?access_key='+API_KEY+'&query='+text)
      .then((response) => response.json())
      .then((json) => {
        if(typeof json.current === 'undefined'){
          alert("Désolé nous n'avons pas trouvé cette ville")
        }else{
          this.setState({weather: json})
          
          this.setState({country: this.state.weather.location.country})
          this.setState({town: this.state.weather.location.name})
          this.setState({datetime: this.state.weather.location.localtime})
          this.setState({temperature: this.state.weather.current.temperature})
          this.setState({temps: this.state.weather.current.weather_descriptions})
          console.log(this.state.weather.location.country)
          console.log(this.state.weather.location.localtime)
          console.log(this.state.weather.location.name)
          console.log(this.state.weather.current.temperature)
          console.log(this.state.weather.current.weather_descriptions)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render(){
    return (
      
      <View style={styles.container}>
        <StatusBarCustom title="App Weather"/>
        <Searchbar
          placeholder="Entrer le nom d'une ville"
          style={{marginTop: 10}}
          onChangeText={(text) => this._changeText(text)}
          
        />
        <Button 
          mode="contained" 
          onPress={() => this.getWeather(this.villeEntrer)}
          style={{marginTop: 10, backgroundColor: '#E06355'}}
          >Obtain Méteo</Button>
        <Title style={styles.nomVille}>{this.state.town}</Title>
        <Title style={styles.nomPays}>{this.state.country}</Title>
        <Text style={styles.heurePays}>{this.state.datetime}</Text>
        <Text style={styles.temperature}>{this.state.temperature} °</Text>
        <Text style={styles.temps}>{this.state.temps}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
  },
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
  },
  flex2: {
      flex: 4,
  },
  flex4: {
      flex: 1,
      flexDirection: 'column'
  },
  textInputStyle: {
      marginTop:10,
    backgroundColor: '#eeeeee',
    height: 40,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonStyle: {
      marginTop: 5,
      flex: 1,
      alignItems: 'center'
  }
});