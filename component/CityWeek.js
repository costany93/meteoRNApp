import React,{useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import StatusBarCustom from '../nativeComponent/StatusBarCustom'

const CityWeek = ({route,props}) =>{
   const {nom} = route.params;
   const {mini} = route.params;
   const {maxi} = route.params;
   const tempLundi = Math.floor(Math.random() * (maxi - mini +1))+ mini;
   const tempMardi = Math.floor(Math.random() * (maxi - mini +1))+ mini;
   const tempMercredi = Math.floor(Math.random() * (maxi - mini +1))+ mini;
   const tempJeudi = Math.floor(Math.random() * (maxi - mini +1))+ mini;
   const tempVendredi = Math.floor(Math.random() * (maxi - mini +1))+ mini;
   const tempSamedi = Math.floor(Math.random() * (maxi - mini +1))+ mini;
   const tempDimanche = Math.floor(Math.random() * (maxi - mini +1))+ mini;
    return(
            <View style={styles.container}>
                <StatusBarCustom title="Weather Week"/>
                <Text style={styles.textCity}> Météo prévu dans la semaine sur {JSON.stringify(nom)}</Text>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Lundi</Text>
                    <Text style={styles.temperature}>{tempLundi}°</Text>
                </View>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Mardi</Text>
                    <Text style={styles.temperature}>{tempMardi}°</Text>
                </View>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Mercredi</Text>
                    <Text style={styles.temperature}>{tempMercredi}°</Text>
                </View>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Jeudi</Text>
                    <Text style={styles.temperature}>{tempJeudi}°</Text>
                </View>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Vendredi</Text>
                    <Text style={styles.temperature}>{tempVendredi}°</Text>
                </View>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Samedi</Text>
                    <Text style={styles.temperature}>{tempSamedi}°</Text>
                </View>
                <View style={styles.containerJour}>
                    <Text style={styles.jour}>Dimanche</Text>
                    <Text style={styles.temperature}>{tempDimanche}°</Text>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    textCity: {
        textAlign: 'center',
        fontSize: 25,
        textTransform: 'capitalize'
    },
    containerJour:{
        borderTopWidth: 2,
        marginTop: 10
    },
    jour: {
        fontSize: 25,
        textAlign: 'center'
    },
    temperature: {
        fontSize: 20,
        textAlign: 'center'
    }
})
export default CityWeek