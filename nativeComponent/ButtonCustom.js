import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

const ButtonCustom = (props) =>{
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.viewTextInsideButton}>
                    <Text style={styles.textInsideButton}>{props.buttonTitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 300,
        height: 50,
        borderRadius: 50,
        shadowColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    textInsideButton: {
        fontSize: 20
    }
});

export default ButtonCustom