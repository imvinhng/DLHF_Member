import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, ScrollView, Dimensions } from 'react-native';
import { LoginButton } from '../../../utils/CustomButton';
import { OTP_Login } from '../OTP';
import { useNavigation } from '@react-navigation/native';
import { CloseButton } from '../../../utils/CustomComponents';
import { black } from '../../../assets/style/Colors';


const Login = (props) => {
    const [loginBtnColor, setLoginBtnColor] = useState('#eb9f1c');
    const [loginBtnBorderColor, setLoginBtnBorderColor] = useState('#000');
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigation = useNavigation();

    const passwordCheck = () => {
        navigation.navigate('Home', { screen: 'HomeScreen', params: { loggedIn: true } })
    }

    return (
        <View style={styles.home}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/background/dutch-windmill.png')}
            />
            <CloseButton buttonStyle={styles.close_btn} />
            <ScrollView style={styles.body}>
                <View style={{ alignItems: 'center', height: bodyHeight }}>
                    <Text style={styles.title}>Welcome to</Text>
                    <Image source={require('../../../assets/images/extras/DLHF-logo.png')} />

                    <TextInput
                        style={[
                            styles.text_input,
                            { borderColor: loginBtnBorderColor }
                        ]}
                        keyboardType='number-pad'
                        placeholder={'Enter your phone number'}
                    />
                    <TextInput
                        style={[
                            styles.text_input,
                            { borderColor: loginBtnBorderColor }
                        ]}
                        secureTextEntry
                        placeholder={'Enter password'}
                        onSubmitEditing={passwordCheck}
                    />
                    <LoginButton
                        style={styles.login_btn}
                        bgColor={loginBtnColor}
                        textColor={'#fff'}
                        onPressFunction={passwordCheck}
                    />

                    <Text style={styles.text_small} onPress={() => navigation.navigate('Auth', { screen: 'ForgetPassword' })}> Forget password?</Text>
                    <View style={{ height: 30 }} />

                    <View style={styles.row_wrapper}>
                        <Text style={styles.text_small}>Not registered?</Text>
                        <Text style={styles.text_hyperlink} onPress={() => navigation.navigate('Auth', { screen: 'Register' })}>Register here</Text>
                    </View>


                    {/* <View style={{ height: 30 }} /> */}
                    <Text style={styles.footer}>Vietnamese</Text>
                </View>
            </ScrollView>
        </View>

    );
}

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen');
const bodyHeight = ScreenHeight * 0.7;
const imageHeight = ScreenHeight * 0.4;

const styles = StyleSheet.create({
    home: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: black,
    },
    body: {
        backgroundColor: '#fff',
        width: '100%',
        height: bodyHeight,
        borderRadius: 20,
        marginTop: -(ScreenHeight * 0.1),
    },
    image: {
        width: ScreenWidth,
        height: imageHeight,
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
    footer: {
        fontSize: 15,
        position: 'absolute',
        top: Platform.OS == 'ios' ? bodyHeight * 0.9 : bodyHeight * 0.85,
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
        left: ScreenWidth - 40,
        top: Platform.OS == 'ios' ? 45 : 15,
        height: 20,
        width: 20,
    },
    text_small: {
        fontSize: 15,
        margin: 5,
        paddingTop: 10,
        fontWeight: '600',
        textAlign: 'center',
    },
    text_hyperlink: {
        fontSize: 15,
        margin: 5,
        paddingTop: 10,
        textAlign: 'center',
        color: '#eb9f1c',
        textDecorationLine: 'underline',
    },
    row_wrapper: {
        flexDirection: 'row',
    },
})

export default Login;