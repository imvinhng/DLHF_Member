import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView } from 'react-native';
import { LoginButton, LongButton_Icon, RoundButton } from '../../utils/CustomButton';
import { OTP_Login } from './OTP';
import { useNavigation } from '@react-navigation/native';


function Login(props) {
    const [loginBtnColor, setLoginBtnColor] = useState('gray');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState('#000');
    const [modalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    const login = (value) => {
        if (value != '') {
            setLoginBtnColor('#eb9f1c');
            setLoginBtnBorderColor('#eb9f1c');
            setPhoneNumber(value);
        } else {
            setLoginBtnColor('gray');
            setLoginBtnBorderColor('#000');
        }
    }

    return (
        <View style={styles.background}>
            <Image
                style={styles.image}
                source={require('../../assets/background/dutch-windmill.png')}
            />
            <RoundButton iconName='times' iconSize={15} buttonStyle={styles.close_btn} onPressFunction={() => navigation.navigate('Home')} />
            <ScrollView style={styles.body} contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.title}>Welcome to</Text>
                <Image source={require('../../assets/DLHF-logo.png')} />

                <TextInput
                    style={[
                        styles.text_input,
                        { borderColor: loginBtnBorderColor }
                    ]}
                    keyboardType='number-pad'
                    placeholder={'Enter your phone number'}
                    onChangeText={login}
                    onSubmitEditing={() => navigation.navigate('OTP_Login', { phone_number: phoneNumber })}
                />
                <LoginButton
                    style={styles.login_btn}
                    bgColor={loginBtnColor}
                    textColor={'#fff'}
                    onPressFunction={() => navigation.navigate('OTP_Login', { phone_number: phoneNumber })}
                />

                <View style={styles.row_wrapper}>
                    <View style={styles.line} />
                    <Text style={styles.text}>OR</Text>
                    <View style={styles.line} />
                </View>

                <LongButton_Icon
                    buttonStyle={styles.apple_btn}
                    textStyle={styles.alt_login_text}
                    iconName={'apple'}
                    iconSize={20}
                    iconColor={'#fff'}
                    textColor={'#fff'}
                    buttonColor={'#000'}
                    text={'Continue with Apple '}
                />
                <LongButton_Icon
                    buttonStyle={styles.facebook_btn}
                    textStyle={styles.alt_login_text}
                    iconName={'facebook'}
                    iconSize={20}
                    textColor={'#fff'}
                    buttonColor={'#3856c2'}
                    text={'Continue with Facebook'}
                />
                <LongButton_Icon
                    buttonStyle={styles.google_btn}
                    textStyle={styles.alt_login_text}
                    iconName={'google'}
                    iconSize={20}
                    textColor={'#000'}
                    buttonColor={'#fff'}
                    text={'Continue with Google'}
                />

                <Text style={styles.subtext}>Vietnamese</Text>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '40%',
    },
    title: {
        fontSize: 25,
        margin: 15,
        fontFamily: 'Oswald-Regular',
    },
    text: {
        fontSize: 15,
        margin: 20,
    },
    subtext: {
        fontSize: 15,
        marginTop: 40,
    },
    alt_login_text: {
        paddingLeft: 10,
    },
    row_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
        height: '70%',
        borderRadius: 20,
        marginTop: -80,
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
    login_btn: {
        width: '90%',

    },
    apple_btn: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebook_btn: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    google_btn: {
        width: '90%',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderBottomColor: 'black',
        width: '35%',
        borderWidth: 1,
        borderColor: 'grey',
    },
    close_btn: {
        position: 'absolute',
        left: Platform.OS == 'ios' ? 350 : 370,
        top: Platform.OS == 'ios' ? 45 : 15,
        height: 20,
        width: 20,
    }
})

export default Login;