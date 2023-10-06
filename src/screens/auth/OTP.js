import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Register_PasswordSet from './register/Register_PasswordSet';
import { useNavigation } from '@react-navigation/native';

const otpValue = '000000';

export const OTP_Login = (props) => {
    const navigation = useNavigation();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(false);
            }}
        >
            <TouchableOpacity style={styles.backdrop_top} onPress={() => props.setModalVisible(false)} />
            <View style={styles.home}>
                {/* Make sure to not include header so user can click outside the View to close the Modal */}

                <View style={styles.body}>
                    <View style={styles.container}>
                        <Text style={styles.title}>OTP Verification</Text>
                        <Text style={styles.text}>A verifcation code of 6 digits has been sent to the phone number {props.phone_number}</Text>
                        <Text style={styles.text2}>Enter code to continue</Text>
                    </View>
                    {/* 6 square text input */}

                    <OTPTextInput
                        textInputStyle={{ backgroundColor: 'lightgray', borderRadius: 7 }}
                        inputCount={6}
                        autoFocus
                        handleTextChange={(code) => {
                            if (code == otpValue) {
                                console.log(`Verified, you are good to go!`);
                                props.setModalVisible(false);
                                navigation.navigate('Home', { loggedIn: true })
                            }
                        }}
                    />

                    <Text style={styles.footer}>Didn't receive the code? Resend (170s)</Text>

                </View>
            </View>
        </Modal>
    );
}
export function OTP_Register(props) {
    const [passwordSetModalVisible, setPasswordSetModalVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(false);
            }}
        >
            <TouchableOpacity style={styles.backdrop_top} onPress={() => props.setModalVisible(false)} />
            <View style={styles.home}>
                {/* Make sure to not include header so user can click outside the View to close the Modal */}

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
                                {props.phone_number}
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
                                console.log(`Verified, you are good to go!`);
                                setPasswordSetModalVisible(true);
                            }
                        }}
                    />

                    <Text style={styles.footer}>Didn't receive the code? Resend (170s)</Text>

                    <Register_PasswordSet
                        modalVisible={passwordSetModalVisible}
                        setModalVisible={setPasswordSetModalVisible}
                        phoneNumber={props.phoneNumber}
                    />

                </View>
            </View>
        </Modal>
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
        height: '70%',
        borderRadius: 20,
        alignItems: 'center',
    },
    backdrop_top: {
        height: Platform.OS == 'ios' ? '14%' : '8%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
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

})

