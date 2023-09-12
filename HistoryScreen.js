import React, { useState, useRef } from 'react'; // Lisätty useState- ja useRef-importit
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Lisätty useNavigation-import

export default function HistoryScreen({ route }) {
    const { data } = route.params;
    const navigation = useNavigation();
    
   


    return ( 
        <View style={styles.container}>
            <Text style={styles.heading}>History</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => {
                    return <Text style={styles.heading1}>{item}</Text>;
                }}
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategrey',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    },

    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    heading1: {
        fontSize: 25,
        color: 'white'
    },
});
