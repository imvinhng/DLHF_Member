import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { LongButton, RoundButton, RoundButton_Octicons } from '../../../utils/CustomButton';
import Register_PersonalInfo from './Register_PersonalInfo';
import { OrangeLine } from '../../../utils/CustomComponents';
import { useNavigation } from '@react-navigation/native';



function Register_PasswordSet(props) {

    const navigation = useNavigation();

    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showConfirm, setShowConfirm] = useState(false);

    const [lengthPassed, setLengthPassed] = useState(false);
    const [lowercasePassed, setLowercasePassed] = useState(false);
    const [uppercasePassed, setUppercasePassed] = useState(false);
    const [numberPassed, setNumberPassed] = useState(false);
    const [characterPassed, setCharacterPassed] = useState(false);

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

    const passwordCheck = (text) => {

        if (text.length >= 8) {
            setLengthPassed(true)
        } else {
            setLengthPassed(false)
        }
        if (text.match(/[a-z]/)) {
            setLowercasePassed(true)
        } else {
            setLowercasePassed(false)
        }

        if (text.match(/[A-Z]/)) {
            setUppercasePassed(true)
        } else {
            setUppercasePassed(false)
        }

        if (text.match(/[0-9]/)) {
            setNumberPassed(true)
        } else {
            setNumberPassed(false)
        }

        if (text.match(/([()[\]{}?!$%&\/=*+~])/)) {
            setCharacterPassed(true)
        } else {
            setCharacterPassed(false)
        }
    }

    const registerSuccessful = () => {
        if (newPassword != confirmNewPassword) {
            Alert.alert('Your password does not match!')
        } else if (!lengthPassed) {
            Alert.alert('Your password needs at least 8 characters!')
        } else if (!lowercasePassed) {
            Alert.alert('You must include at least 1 lowercase letter!')
        } else if (!uppercasePassed) {
            Alert.alert('You must include at least 1 uppercase letter!')
        } else if (!numberPassed) {
            Alert.alert('You must include at least 1 number!')
        } else if (!characterPassed) {
            Alert.alert('You must include at least 1 special character!')
        } else {
            AsyncAlert('Congrats', 'Your password has been set successfully!')
            return true;
        }

        return false;
    }



    return (

        <View style={styles.home}>
            <View>
                <Image style={styles.image} source={require('../../../assets/images/background/dutch-windmill.png')} />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Register new member</Text>
                <View style={styles.text_container}>
                    <Text style={styles.subtitle}>Please enter your new password to register your account</Text>
                </View>

                <View style={{ height: 40, width: '100%' }} />

                <TextInput style={styles.text_input} secureTextEntry={!showPassword} placeholder={'Password'} onChangeText={(text) => {
                    setNewPassword(text)
                    passwordCheck(text)
                }} />
                <OrangeLine />
                <RoundButton iconName={'eye-slash'} iconSize={15} iconColor={'#eb9f1c'} buttonStyle={styles.icon1} onPressFunction={
                    () => setShowPassword(!showPassword)
                } />

                <TextInput
                    style={styles.text_input}
                    secureTextEntry={!showConfirm}
                    placeholder={'Confirm new password'}
                    onChangeText={(text) => {
                        setConfirmNewPassword(text)
                    }} onSubmitEditing={() => {
                        if (registerSuccessful()) {
                            navigation.navigate('Register_PersonalInfo')
                        }
                    }}
                />
                <OrangeLine />
                <RoundButton iconName={'eye-slash'} iconSize={15} iconColor={'#eb9f1c'} buttonStyle={styles.icon2} onPressFunction={
                    () => setShowConfirm(showConfirm)
                } />

                <View style={{ width: '95%', margin: 10 }}>
                    <Text style={styles.text}>*Requirement: Password needs to be at least 8 characters long including an uppercase letter, lowercase letter, and number and special character.</Text>

                    <View style={styles.row_wrapper}>
                        <RoundButton_Octicons iconName={lengthPassed ? 'check-circle' : 'circle-slash'} iconSize={20} iconColor={lengthPassed ? 'green' : 'red'} bgColor={'#fff'} buttonStyle={styles.requirement_icon} />
                        <Text style={{ color: lengthPassed ? 'green' : 'red' }}>at least 8 characters</Text>
                    </View>

                    <View style={styles.row_wrapper}>
                        <RoundButton_Octicons iconName={lowercasePassed ? 'check-circle' : 'circle-slash'} iconSize={20} iconColor={lowercasePassed ? 'green' : 'red'} bgColor={'#fff'} buttonStyle={styles.requirement_icon} />
                        <Text style={{ color: lowercasePassed ? 'green' : 'red' }}>includes lowercase letter</Text>
                    </View>

                    <View style={styles.row_wrapper}>
                        <RoundButton_Octicons iconName={uppercasePassed ? 'check-circle' : 'circle-slash'} iconSize={20} iconColor={uppercasePassed ? 'green' : 'red'} bgColor={'#fff'} buttonStyle={styles.requirement_icon} />
                        <Text style={{ color: uppercasePassed ? 'green' : 'red' }}>includes UPPERCASE letter</Text>
                    </View>

                    <View style={styles.row_wrapper}>
                        <RoundButton_Octicons iconName={numberPassed ? 'check-circle' : 'circle-slash'} iconSize={20} iconColor={numberPassed ? 'green' : 'red'} bgColor={'#fff'} buttonStyle={styles.requirement_icon} />
                        <Text style={{ color: numberPassed ? 'green' : 'red' }}>has at least 1 number</Text>
                    </View>

                    <View style={styles.row_wrapper}>
                        <RoundButton_Octicons iconName={characterPassed ? 'check-circle' : 'circle-slash'} iconSize={20} iconColor={characterPassed ? 'green' : 'red'} bgColor={'#fff'} buttonStyle={styles.requirement_icon} />
                        <Text style={{ color: characterPassed ? 'green' : 'red' }}>has at least 1 special character</Text>
                    </View>

                </View>

                <LongButton
                    text='Submit'
                    buttonColor={'#eb9f1c'}
                    buttonStyle={styles.long_btn}
                    textStyle={styles.button_text}
                    onPressFunction={() => {
                        if (registerSuccessful()) {
                            navigation.navigate('Register_PersonalInfo')
                        }
                    }}
                />

                <View style={{ width: '80%', alignItems: 'center' }}>
                    <Text style={[styles.text, { textAlign: 'center' }]}>Registering this account means you agree with DLHF's terms and conditions</Text>
                </View>
            </View>
        </View>
    );
}

export default Register_PasswordSet;

const styles = StyleSheet.create({
    home: {
        flex: 1,
        // marginTop: Platform.OS == 'ios' ? '30%' : '16%',
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
    image: {
        width: '100%',
        position: 'absolute'
        // height: '100%',
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
    row_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: -10,
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
        top: 220,
        left: 330,
    },
    icon2: {
        position: 'absolute',
        top: 280,
        left: 330,
    },
})

