import React,{useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import StatusBarCustom from '../nativeComponent/StatusBarCustom'

const City = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container,{backgroundColor: props.background}]}>
                <Text style={styles.textCity}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        
        marginTop: 5,
        marginBottom: 5
    },
    textCity: {
        textAlign: 'center',
        fontSize: 35,
        textTransform: 'capitalize'
    }
})
export default City