import { StyleSheet, View, Text, Image, Modal, TouchableOpacity, Platform } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';


import React from 'react';
function OTP(props) {
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
                    />

                    <Text style={styles.footer}>Didn't receive the code? Resend (170s)</Text>

                </View>
            </View>
            <TouchableOpacity style={styles.backdrop_bottom} onPress={() => props.setModalVisible(false)} />
        </Modal>
    );
}

const styles = StyleSheet.create({
    home: {
        // flex: 1,
        // marginTop: Platform.OS == 'ios' ? '30%' : '16%',
        height: Platform.OS == 'ios' ? '100%' : '86.2%',
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        alignItems: 'center',
    },
    backdrop_top: {
        height: Platform.OS == 'ios' ? '14%' : '8%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
    },
    backdrop_bottom: {
        height: Platform.OS == 'ios' ? '30%' : '8%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        margin: 0,
    },
    container: {
        height: 150,
        width: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
    },
    title: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        margin: 10,
        marginBottom: 20,
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
    }

})

export default OTP;
