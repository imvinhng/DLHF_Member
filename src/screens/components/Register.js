import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, Alert } from 'react-native';
import { LoginButton, LongButton, LongButton_Icon, RoundButton } from '../../utils/CustomButton';
import { OTP_Register } from './OTP';
import { useNavigation } from '@react-navigation/native';


function Register(props) {
    const [loginBtnColor, setLoginBtnColor] = useState('gray');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState('lightgray');
    const [modalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    const registerStyleFn = (value) => {
        if (value != '') {
            setLoginBtnColor('#eb9f1c');
            setLoginBtnBorderColor('#eb9f1c');
            setPhoneNumber(value);
        } else {
            setLoginBtnColor('gray');
            setLoginBtnBorderColor('lightgray');
        }
    }

    return (
        <View style={styles.background}>
            <Image
                style={styles.image}
                source={require('../../assets/dutch-windmill.png')}
            />
            <RoundButton iconName='times' iconSize={15} buttonStyle={styles.close_btn} onPressFunction={() => navigation.navigate('Home')} />
            <ScrollView style={styles.body} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.title}>Register new member</Text>
                <View style={styles.text_container}>
                    <Text style={styles.text}>Please enter your phone number to register your new account</Text>
                </View>
                <TextInput
                    style={[
                        styles.text_input,
                        { borderColor: loginBtnBorderColor }
                    ]}
                    keyboardType='number-pad'
                    placeholder={'Enter your phone number'}
                    onChangeText={registerStyleFn}
                    onSubmitEditing={() => {
                        if (phoneNumber == '' || phoneNumber.length < 10) {
                            Alert.alert('Your phone number is not a valid number!')
                        } else {
                            setModalVisible(true)
                        }
                    }}
                />
                <LongButton
                    text='Continue'
                    buttonColor={'#eb9f1c'}
                    buttonStyle={styles.long_btn}
                    textStyle={styles.button_text}
                    onPressFunction={() => {
                        if (phoneNumber == '' || phoneNumber.length < 10) {
                            Alert.alert('Your phone number is not a valid number!')
                        } else {
                            setModalVisible(true)
                        }
                    }}

                />
            </ScrollView>

            <OTP_Register
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                phoneNumber={phoneNumber}
            />
        </View>

    );
}

export default Register;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#fff',
    },
    body: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
        height: '70%',
        borderRadius: 20,
        marginTop: -80,
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
    text: {
        fontSize: 15,
        margin: 10,
        // marginHorizontal: 30,
        textAlign: 'center',
    },
    text_input: {
        width: "90%",
        height: 60,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 18,
        padding: 15,
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
    }

})

