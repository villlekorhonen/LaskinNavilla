import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';





export default function HomeScreen() {



    const [result, setResult] = useState('');
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [data, setData] = useState([]);

    const initialFocus = useRef(null);
    const navigation = useNavigation();

    const calculate = operator => {
        const [number1, number2] = [Number(operand1), Number(operand2)];

        if (isNaN(number1) || isNaN(number2)) {
            setResult(0);

        } else {
            let result = 0;

            switch (operator) {
                case '+':
                    result = number1 + number2;
                    break;

                case '-':
                    result = number1 - number2;
                    break;
            }
            setResult(result);

            const text = `${number1} ${operator} ${number2} = ${result}`;
            setData([...data, text]);
        }


        setOperand1('');
        setOperand2('');
        initialFocus.current.focus();
    };
    const handlePress = () => {

        navigation.navigate('Result', { data });
    };



    return (

        <View style={styles.container}>

            <Text style={styles.heading}>Result: {result}</Text>

            <TextInput style={styles.input} ref={initialFocus}
                keyboardType={'numeric'}
                onChangeText={text => setOperand1(text)}
                value={operand1}
            />

            <TextInput style={styles.input}
                keyboardType={'numeric'}
                onChangeText={text => setOperand2(text)}
                value={operand2}
            />
        
            <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => calculate("+")}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => calculate('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            </View>

            <View style={styles.button}>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.buttonText1}>Go to History</Text>
                </TouchableOpacity>
            </View>


        </View>
        

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        
    },

    input: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 3,
        padding: 5,
        margin: 5,
        width: '50%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'


    },
    buttons: {
        width: '60%',
        flexDirection: 'row',
        margin: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: 'yellow',


    },
    buttonText: {
        fontSize: 25,
        borderColor: 'black',
        marginLeft: 22,
        marginTop: 10,
        fontWeight: 'bold',


    },
    button: {
        width: '50%',
        height: 70,
        flexDirection: 'row',
        margin: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        justifyContent: 'space-between',
        backgroundColor: 'palegreen',
        

    },
    buttonText1: {
        fontSize: 25,
        borderColor: 'black',
        marginLeft: 11,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 14
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%',
        marginRight: 80
        
    },
});