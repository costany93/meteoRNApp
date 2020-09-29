import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Appbar} from 'react-native-paper'

const StatusBarCustom = (props) =>{
        return(
            <View>
                <Appbar.Header style={styles.statusStyle}>
                    <Appbar.Content title={props.title} titleStyle={{textAlign: 'center'}}/>
                </Appbar.Header>
            </View>
        );
}

const styles = StyleSheet.create({
    statusStyle: {
        backgroundColor: '#36B6F0',
        height: 50,
        borderBottomWidth: 2
    }
    
});

export default StatusBarCustom;