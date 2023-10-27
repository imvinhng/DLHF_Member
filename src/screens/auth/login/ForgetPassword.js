import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, Dimensions } from 'react-native';
import { LoginButton } from '../../../utils/CustomButton';
import { OTP_Login } from '../OTP';
import { useNavigation } from '@react-navigation/native';
import { CloseButton } from '../../../utils/CustomComponents';
import { darkgray } from '../../../assets/style/Colors';


function ForgetPassword(props) {
    const [loginBtnColor, setLoginBtnColor] = useState('gray');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState(darkgray);
    const [modalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    function orangeEffect() {
        setLoginBtnColor('#eb9f1c');
        setLoginBtnBorderColor('#eb9f1c');
    }

    function login(phone_number) {
        setPhoneNumber(phone_number)
    }

    function promptOTP() {
        navigation.navigate('Login', { screen: 'OTPLoginScreen', params: { phone_number: phoneNumber } })
    }

    return (
        <View style={styles.background}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/background/dutch-windmill.png')}
            />
            <CloseButton buttonStyle={styles.close_btn} />
            <View style={styles.body}>
                <Text style={styles.title}>Welcome to</Text>
                <Image source={require('../../../assets/images/extras/DLHF-logo.png')} />

                <TextInput
                    style={[
                        styles.text_input,
                        { borderColor: loginBtnBorderColor }
                    ]}
                    keyboardType='number-pad'
                    placeholder={'Enter your phone number'}
                    onFocus={orangeEffect}
                    onChangeText={(phone_number) => login(phone_number)}
                    onSubmitEditing={promptOTP}
                />
                <LoginButton
                    style={styles.login_btn}
                    bgColor={loginBtnColor}
                    textColor={'#fff'}
                    onPressFunction={promptOTP}
                />

            </View>
        </View>

    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const bodyHeight = ScreenHeight;
const bodyMarginTop = -0.1 * ScreenHeight;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#fff',
    },
    body: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: bodyHeight,
        borderRadius: 20,
        marginTop: bodyMarginTop,
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
    text_input: {
        width: "90%",
        height: 60,
        marginTop: 20,
        borderWidth: 0.5,
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
        right: 10,
        top: Platform.OS == 'ios' ? 35 : 10,
    },
})

export default ForgetPassword;