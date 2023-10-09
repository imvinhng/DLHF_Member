import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Register_PasswordSet from './register/Register_PasswordSet';
import { useNavigation, useRoute } from '@react-navigation/native';

const otpValue = '000000';

export const OTP_Login = ({ navigation, route }) => {

    return (
        <View style={styles.home}>
            <View>
                <Image style={styles.image} source={require('../../assets/background/dutch-windmill.png')} />
            </View>
            <View style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.title}>OTP Verification</Text>
                    <View style={styles.row_wrapper_custom}>
                        <Text style={styles.text}>A verifcation code of 6 digits has been sent to the phone number </Text>
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: '#000',
                                }
                            ]}
                        >
                            {route.params.phone_number}
                        </Text>
                    </View>
                    <Text style={styles.text2}>Enter code to continue</Text>
                </View>

                {/* 6 square text input */}
                <OTPTextInput
                    textInputStyle={{ backgroundColor: 'lightgray', borderRadius: 7 }}
                    inputCount={6}
                    autoFocus
                    handleTextChange={(code) => {
                        if (code == otpValue) {
                            navigation.navigate('BottomTab', { screen: 'Home', params: { loggedIn: true } })
                        }
                    }}
                />

                <Text style={styles.footer}>Didn't receive the code? Resend (170s)</Text>
            </View>
        </View>
    );
}
export function OTP_Register({ navigation, route }) {

    return (
        <View style={styles.home}>
            <View>
                <Image style={styles.image} source={require('../../assets/background/dutch-windmill.png')} />
            </View>
            <View style={styles.body}>
                <View style={styles.container}>
                    <Text style={styles.title}>Register new member</Text>
                    <View style={styles.row_wrapper_custom}>
                        <Text style={styles.text}>A verifcation code of 6 digits has been sent to the phone number</Text>
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: '#000',
                                }
                            ]}
                        >
                            {route.params.phone_number}
                        </Text>
                    </View>
                    <Text style={styles.text2}>Enter code to continue</Text>
                </View>

                {/* 6 square text input */}
                <OTPTextInput
                    textInputStyle={{ backgroundColor: 'lightgray', borderRadius: 7 }}
                    inputCount={6}
                    autoFocus
                    handleTextChange={(code) => {
                        if (code == otpValue) {
                            navigation.navigate('Register_PasswordSet')
                        }
                    }}
                />

                <Text style={styles.footer}>Didn't receive the code? Resend (170s)</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    home: {
        // flex: 1,
        // marginTop: Platform.OS == 'ios' ? '30%' : '16%',
        height: '100%',
        backgroundColor: '#fff',
    },
    body: {
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
        marginTop: '20%',
        paddingTop: 50,
        borderRadius: 20,
        alignItems: 'center',
    },
    row_wrapper_custom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 10,
        marginBottom: 20,
    },
    container: {
        height: 150,
        width: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    title: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
    },
    text2: {
        // marginBottom: -10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    footer: {
        marginTop: 30,
    },
    image: {
        width: '100%',
        position: 'absolute'
        // height: '100%',
    },

})

