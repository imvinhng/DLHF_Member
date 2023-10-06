import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Modal, TouchableOpacity, Alert } from 'react-native';
import { LongButton, RoundButton } from '../../../utils/CustomButton';
import Register_PersonalInfo from './Register_PersonalInfo';


function Register_PasswordSet(props) {

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [modalPersonalInfoVisible, setModalPersonalInfoVisible] = useState(false);

    const AsyncAlert = (title, msg) => new Promise((resolve) => {
        Alert.alert(
            title,
            msg,
            [
                {
                    text: 'ok',
                    onPress: () => {
                        resolve('YES');
                    },
                },
            ],
            { cancelable: false },
        );
    });

    const passwordRegister = async () => {
        if (newPassword != confirmNewPassword) {
            Alert.alert('Your password do not match!')
        } else if (newPassword.length < 8) {
            Alert.alert('Your password must be at least 8 characters!')
        } else if (!newPassword.match(/[A-Z]/)) {
            Alert.alert('You must include at least one uppercase letter in your password!')
        } else if (!newPassword.match(/[a-z]/)) {
            Alert.alert('You must include at least one lowercase letter in your password!')
        } else if (!newPassword.match(/[0-9]/)) {
            Alert.alert('You must include at least one number in your password!')
        } else {
            await AsyncAlert('Congrats', 'Your password has been set successfully!')
            // props.setModalVisible(false)
            // console.log('Register_PasswordSet visible: ' + props.modalVisible)
            setModalPersonalInfoVisible(true)
        }
    }

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
                <View style={styles.body}>
                    <Text style={styles.title}>Register new member</Text>
                    <View style={styles.text_container}>
                        <Text style={styles.subtitle}>Please enter your new password to register your account</Text>
                    </View>

                    <View style={{ height: 70, width: '100%' }} />

                    <TextInput style={styles.text_input} secureTextEntry placeholder={'Password'} onChangeText={(text) => setNewPassword(text)} />
                    <View style={{ width: '90%', height: 0.7, backgroundColor: '#eb9f1c' }} />
                    <RoundButton iconName={'eye-slash'} iconSize={15} iconColor={'#eb9f1c'} buttonStyle={styles.icon1} />

                    <TextInput style={styles.text_input} secureTextEntry placeholder={'Confirm new password'} onChangeText={(text) => setConfirmNewPassword(text)} onSubmitEditing={passwordRegister} />
                    <View style={{ width: '90%', height: 0.7, backgroundColor: '#eb9f1c' }} />
                    <RoundButton iconName={'eye-slash'} iconSize={15} iconColor={'#eb9f1c'} buttonStyle={styles.icon2} />

                    <View style={{ width: '95%', margin: 10 }}>
                        <Text style={styles.text}>*Requirement: Password needs to be at least 8 characters long including an uppercase letter, lowercase letter and number.</Text>
                    </View>

                    <LongButton
                        text='Submit'
                        buttonColor={'#eb9f1c'}
                        buttonStyle={styles.long_btn}
                        textStyle={styles.button_text}
                        onPressFunction={passwordRegister}
                    />

                    <View style={{ width: '80%', alignItems: 'center' }}>
                        <Text style={[styles.text, { textAlign: 'center' }]}>Registering this account means you agree with DLHF's terms and conditions</Text>
                    </View>

                    <Register_PersonalInfo
                        modalVisible={modalPersonalInfoVisible}
                        setModalVisible={setModalPersonalInfoVisible}
                        password={newPassword}
                        phoneNumber={props.phoneNumber}
                    />
                </View>
            </View>
        </Modal >
    );
}

export default Register_PasswordSet;

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
    image: {
        width: '100%',
        height: '40%',
    },
    title: {
        fontSize: 25,
        margin: 15,
        color: '#1e522c',
        fontFamily: 'DancingScript-Bold',
    },
    subtitle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 12,
        padding: 10,
    },
    text_input: {
        width: "90%",
        height: 60,
        marginTop: 10,
        marginBottom: -10,
        fontSize: 18,
    },
    button_text: {
        color: '#fff',
    },
    long_btn: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        marginTop: 20,
    },
    text_container: {
        width: '80%',
    },
    close_btn: {
        position: 'absolute',
        left: Platform.OS == 'ios' ? 350 : 370,
        top: Platform.OS == 'ios' ? 45 : 15,
        height: 20,
        width: 20,
    },
    icon1: {
        position: 'absolute',
        top: 200,
        left: 330,
    },
    icon2: {
        position: 'absolute',
        top: 260,
        left: 330,
    },
})

