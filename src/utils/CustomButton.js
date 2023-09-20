import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const RoundButton_Clear = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
            ]}
            onPress={props.onPressFunction}
        >
            <FontAwesome5 name={props.iconName} size={props.size} color={props.color} />
        </Pressable>
    );
}
export const RoundButton_Color = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.round_button,
                { backgroundColor: pressed ? '#ddd' : props.bgColor },
                props.style,
            ]}
        // onPress={() => console.log('Round Button clicked')}
        >
            <FontAwesome5 name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </Pressable>
    );
}

export const LoginButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.login_button,
                { backgroundColor: pressed ? '#ddd' : '#eb9f1c' },
            ]}
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#e5ed8a' }}
        >
            <Text style={styles.text}>
                Log In
            </Text>
        </Pressable>
    );
}
export const LongButton = (props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.long_button,
                { backgroundColor: pressed ? '#ddd' : props.buttonColor },
            ]}
            onPress={props.onPressFunction}
        >
            <Text style={styles.text_long_button}>
                {props.text}
            </Text>
        </Pressable>
    );
}



const styles = StyleSheet.create({
    round_button: {
        height: 50,
        width: 50,
        // backgroundColor: '#fff',
        borderRadius: 25,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    text_long_button: {
        fontSize: 15,
        color: '#eb9f1c',
        fontWeight: '600',
    },
    login_button: {
        height: 50,
        width: 170,
        backgroundColor: '#68ede9',
        borderRadius: 5,
        margin: 10,
    },
    long_button: {
        height: 40,
        width: 130,
        backgroundColor: '#68ede9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 3,
        marginTop: 0,

    },
})